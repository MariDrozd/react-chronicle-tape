import styles from './CategorySwiper.module.scss';
import clsx from 'clsx';
import { SvgIconWrapper } from '@/shared/ui/svg-icon-wrapper';
import { ReactComponent as ArrowIcon } from '@/shared/assets/icons/SmallArrow.svg';
import { NavButton } from '@/shared/ui/nav-button';

interface CategorySwiper {
  handleChangeCategory: (id: number) => void;
  activeCategoryId: number;
  length: number;
  isMob?: boolean;
}

export const CategorySwiper = (props: CategorySwiper) => {
  const {
    handleChangeCategory,
    activeCategoryId,
    length,
    isMob = false,
  } = props;

  const counter = `${String(activeCategoryId).padStart(2, '0')}/${String(
    length
  ).padStart(2, '0')}`;

  return (
    <div className={styles.categorySwiperWrap}>
      <div className={styles.selectedCategory}>{counter}</div>
      <div className={styles.btnWrap}>
        <div
          className={clsx(
            styles.prevBtn,
            activeCategoryId === 1 && styles.block
          )}
        >
          <NavButton
            onClick={() => handleChangeCategory(activeCategoryId - 1)}
            disabled={activeCategoryId === 1}
            size={isMob ? 'mob' : 'medium'}
          >
            <SvgIconWrapper
              Svg={ArrowIcon}
              width={'6.25px'}
              height={'12.5px'}
              color="var(--main-dark-color)"
              direction="prev"
            />
          </NavButton>
        </div>
        <div
          className={clsx(
            styles.nextBtn,
            activeCategoryId === length && styles.block
          )}
        >
          <NavButton
            onClick={() => handleChangeCategory(activeCategoryId + 1)}
            disabled={activeCategoryId === length}
            size={isMob ? 'mob' : 'medium'}
          >
            <SvgIconWrapper
              Svg={ArrowIcon}
              width={'6.25px'}
              height={'12.5px'}
              color="var(--main-dark-color)"
            />
          </NavButton>
        </div>
      </div>
    </div>
  );
};
