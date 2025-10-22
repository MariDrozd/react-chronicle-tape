import { useCallback, useMemo, useState } from 'react';
import styles from './HistoricalTape.module.scss';
import 'swiper/css/bundle';
import { useMediaQuery } from 'react-responsive';
import { CategoryCard, Category, mockCategories } from '@/entities/category';
import { Title } from '@/shared/ui/title';
import { CategoryCircle } from '@/features/category-circle';
import { EmulatePagination } from '@/features/emulate-pagination';
import { CategorySwiper } from '@/features/category-swiper';
import { EventSwiper } from '@/features/event-swiper';

export const HistoricalTape = () => {
  const [categories] = useState<Category[]>(mockCategories);
  const [activeCategoryId, setActiveCategoryId] = useState(
    categories[0]?.id ?? 1
  );

  const isDesk = useMediaQuery({ query: '(min-width: 768px)' });
  const isMob = useMediaQuery({ query: '(max-width: 576px)' });

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId),
    [categories, activeCategoryId]
  );

  const eventsOfCategory = activeCategory?.events ?? [];

  const handleChangeCategory = useCallback((categoryId: number) => {
    setActiveCategoryId(categoryId);
  }, []);

  return (
    <div className={styles.mainWrap}>
      <div className={styles.main}>
        <div className={styles.contentGrid}>
          <div className={styles.title}>
            <Title />
          </div>
          <div className={styles.swipersWrap}>
            <div className={styles.controlsCategory}>
              <CategorySwiper
                handleChangeCategory={handleChangeCategory}
                activeCategoryId={activeCategoryId}
                length={categories.length}
                isMob={isMob}
                />
              {isMob && (
                <div className={styles.pagination}>
                  <EmulatePagination
                    handleChangeCategory={handleChangeCategory}
                    activeCategoryId={activeCategoryId}
                    length={categories.length}
                  />
                </div>
              )}
            </div>
            <EventSwiper
              activeCategoryId={activeCategoryId}
              events={eventsOfCategory}
              showNavigation={isMob}
            />
          </div>
        </div>
        <div className={styles.verticalLine} />
        <div className={styles.horizontLine} />
        {isDesk && (
            <div className={styles.circle}>
              <CategoryCircle
                handleChangeCategory={handleChangeCategory}
                activeCategoryId={activeCategoryId}
                categories={categories}
              />
            </div>
        )}
        {activeCategory && (
          <div className={styles.period}>
            <CategoryCard category={activeCategory} />
          </div>
        )}
      </div>
    </div>
  );
};
