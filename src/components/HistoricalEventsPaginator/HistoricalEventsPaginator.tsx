import { CircleOfHistoricalEventsDataItem } from '../CircleOfHistoricalEvents/CircleOfHistoricalEvents.types';
import styles from './HistoricalEventsPaginator.module.scss';

interface HistoricalEventsPaginatorProps {
  historicalElementsData: CircleOfHistoricalEventsDataItem[];
  onSelectHistoricalEventId: (id: number) => void;
  currentHistoricalEventId: number;
}
export function HistoricalEventsPaginator({
  historicalElementsData,
  onSelectHistoricalEventId,
  currentHistoricalEventId,
}: HistoricalEventsPaginatorProps) {
  const idx = historicalElementsData.findIndex(
    (el) => el.id === currentHistoricalEventId,
  );

  const handlePev = () => {
    const prevIdx = idx - 1;
    if (prevIdx >= 0) {
      onSelectHistoricalEventId(historicalElementsData[prevIdx].id);
    }
  };

  const handleNext = () => {
    const nextIdx = idx + 1;
    if (nextIdx < historicalElementsData.length) {
      onSelectHistoricalEventId(historicalElementsData[nextIdx].id);
    }
  };

  return (
    <div className={styles.HistoricalEventsPaginator}>
      <div>
        {idx + 1}-{historicalElementsData.length}
      </div>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={handlePev}>
          {'<'}
        </button>
        <button className={styles.button} onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
