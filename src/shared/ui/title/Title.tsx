import { type JSX } from 'react';
import styles from './Title.module.scss';

export const Title = (): JSX.Element => (
  <div className={styles.titleWrap}>
    <div className={styles.leftBorder}></div>
    <h1 className={styles.title}>
      <span>Исторические</span>
      <span>даты</span>
    </h1>
  </div>
);
