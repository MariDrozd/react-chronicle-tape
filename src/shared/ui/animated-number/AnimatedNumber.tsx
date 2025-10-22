import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import clsx from 'clsx';

gsap.registerPlugin(TextPlugin);

interface AnimatedNumberProps {
  className?: string;
  value: number;
}

export const AnimatedNumber = memo(
  ({ className, value }: AnimatedNumberProps) => {
    const numberRef = useRef<HTMLDivElement>(null);
    const prevRef = useRef<number | null>(null);

    useEffect(() => {
      const num = numberRef.current;
      if (!num) return;

      if (prevRef.current === null) {
        num.textContent = String(value);
        prevRef.current = value;
        return;
      }

      gsap.killTweensOf(num);

      gsap.to(num, {
        textContent: value,
        duration: 0.6,
        ease: 'power2.inOut',
        snap: {
          textContent: 1,
        },
        overwrite: 'auto',
      });

      return () => gsap.killTweensOf(num);
    }, [value]);

    return <div ref={numberRef} className={clsx(className)} />;
  }
);
