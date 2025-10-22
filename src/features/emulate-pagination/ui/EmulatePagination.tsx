import { useMemo } from 'react';
import styles from './EmulatePagination.module.scss';
import clsx from 'clsx';
import { NavButton } from '@/shared/ui/nav-button';

interface EmulatePaginationProps {
  handleChangeCategory: (id: number) => void;
  activeCategoryId: number;
  length: number;
}

export const EmulatePagination = (props: EmulatePaginationProps) => {
  const { handleChangeCategory, activeCategoryId, length } = props;

  const points = useMemo(() => {
    return Array.from({ length }, (_, index) => {
      const id = index + 1;
      return (
        <div
          key={`pag-${id}`}
          className={clsx(
            styles.point,
            activeCategoryId === id && styles.selected
          )}
        >
          <NavButton onClick={() => handleChangeCategory(id)} size="point" />
        </div>
      );
    });
  }, [length, activeCategoryId, handleChangeCategory]);

  return <div className={styles.paginationWrap}>{points}</div>;
};
