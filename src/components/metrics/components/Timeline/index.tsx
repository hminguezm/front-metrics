import { FC } from 'react';

// @ts-ignore
import styles from './Timeline.module.scss';

interface TimelinePros {
  data: any;
}

const Timeline: FC<TimelinePros> = ({ data }) => {
  const dateTime = Intl.DateTimeFormat('en-EN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(data.createdAt));

  return (
    <div className={styles['timeline-item']}>
      <div className={styles['timeline-item-content']}>
        <span className={styles.tag} style={{ background: '#e17b77' }}>
          {dateTime}
        </span>
        <p>{`Name: ${data.name ?? 'S/N'}`}</p>
        <p>{`Value: ${data.value ?? 'S/N'}`}</p>
        <span className={styles.circle} />
      </div>
    </div>
  );
};

export default Timeline;
