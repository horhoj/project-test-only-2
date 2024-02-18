import styles from './HistoricalDateBigTitle.module.scss';

interface HistoricalDateBigTitleProps {
  children?: React.ReactNode;
}
export function HistoricalDateBigTitle({
  children,
}: HistoricalDateBigTitleProps) {
  return (
    <div className={styles.HistoricalDateBigTitle}>
      <div className={styles.leftBlock} />
      <div className={styles.title}>
        <div>Исторические</div>
        <div>даты</div>
      </div>
    </div>
  );
}
