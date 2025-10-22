import styles from './CategoryCircle.module.scss';
import gsap from 'gsap';
import clsx from 'clsx';
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import { Category } from '@/entities/category';
import { NavButton } from '@/shared/ui/nav-button';
import {
  degToRad,
  normalizeAngle,
  shortestAngle,
  stepAngleFor,
} from '../lib/angles';

export interface CategoryCircleProps {
  handleChangeCategory: (id: number) => void;
  activeCategoryId: number;
  categories: Category[];
}

const baseAngle = 300;
const stepDurationPerDeg = 0.8 / 60;

export const CategoryCircle = memo((props: CategoryCircleProps) => {
  const { handleChangeCategory, activeCategoryId, categories } = props;

  const circleRef = useRef<HTMLDivElement | null>(null);
  const btnsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const angleRef = useRef(0);
  const animRef = useRef<gsap.core.Timeline | null>(null);

  const idToIndex = useMemo(() => {
    const map = new Map<number, number>();
    categories.forEach((category, index) => map.set(category.id, index));
    return map;
  }, [categories]);

  const stepAngle = useMemo(() => {
    return stepAngleFor(categories.length);
  }, [categories.length]);

  useLayoutEffect(() => {
    const circle = circleRef.current;
    if (!circle || !categories.length) return;

    const rect = circle.getBoundingClientRect();
    const R = Math.min(rect.width, rect.height) / 2;

    btnsRef.current.forEach((btn, index) => {
      if (!btn) return;

      const angleOfBtn = degToRad(baseAngle + index * stepAngle);

      gsap.set(btn, {
        position: 'absolute',
        top: 0,
        left: 0,
        xPercent: -50,
        yPercent: -50,
        x: R + Math.cos(angleOfBtn) * R,
        y: R + Math.sin(angleOfBtn) * R,
        transformOrigin: '50% 50%',
      });
    });

    gsap.set(circle, {
      rotation: angleRef.current,
    });
    gsap.set(btnsRef.current, {
      rotation: -angleRef.current,
    });
  }, [categories.length, stepAngle]);

  const activateCategory = useCallback(
    (index: number) => {
      const circle = circleRef.current;
      if (!circle || !categories.length || stepAngle === 0) return;

      const targetAngle = normalizeAngle(-index * stepAngle);
      const currentAngle = normalizeAngle(angleRef.current);
      const distance = shortestAngle(currentAngle, targetAngle);
      const duration = Math.abs(distance) * stepDurationPerDeg;

      animRef.current?.kill();

      animRef.current = gsap
        .timeline({
          onComplete: () => {
            angleRef.current += distance;
            animRef.current = null;
          },
        })
        .to(
          circle,
          { rotation: `+=${distance}`, duration, ease: 'power2.inOut' },
          0
        )
        .to(
          btnsRef.current,
          { rotation: `-=${distance}`, duration, ease: 'power2.inOut' },
          0
        );
    },
    [categories.length, stepAngle]
  );

  useEffect(() => {
    const activeIndex = idToIndex.get(activeCategoryId);
    if (activeIndex == null) return;
    activateCategory(activeIndex);
  }, [activeCategoryId, idToIndex, categories, activateCategory]);

  useEffect(() => {
    return () => {
      animRef.current?.kill();
    };
  }, []);

  return (
    <div ref={circleRef} className={styles.circle}>
      {categories.map((category, index) => (
        <NavButton
          key={category.id}
          ref={(el) => {
            btnsRef.current[index] = el;
          }}
          size="point"
          className={clsx(
            styles.point,
            category.id === activeCategoryId && styles.active
          )}
          onClick={() => handleChangeCategory(category.id)}
          type="button"
          title={category.category}
        >
          {category.id}
          {<span className={styles.label}>{category.category}</span>}
        </NavButton>
      ))}
    </div>
  );
});
