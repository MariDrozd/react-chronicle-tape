import { Category } from '@/entities/category';
import styles from './CategoryCard.module.scss';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { memo } from 'react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = memo(({ category }: CategoryCardProps) => {
  return (
    <div className={styles.categoryWrap}>
      <div className={styles.start}>
        <AnimatedNumber value={category?.start} />
      </div>
      <div className={styles.end}>
        <AnimatedNumber value={category?.end} />
      </div>
    </div>
  );
});
