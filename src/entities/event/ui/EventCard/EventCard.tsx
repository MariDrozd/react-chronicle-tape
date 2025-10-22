import styles from './EventCard.module.scss';
import { Event } from '../../model/types/event';

interface EventProps {
  event: Event;
}

export const EventCard = ({event}: EventProps) => {

  return (
    <div className={styles.card}>
      <div className={styles.year}>{event.year}</div>
      <div className={styles.description}>{event.description}</div>
    </div>
  );
};
