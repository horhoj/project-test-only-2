import { CircleOfHistoricalEventsDataItem } from '../CircleOfHistoricalEvents/CircleOfHistoricalEvents.types';
import { getDisplayData } from './HistoricalEventsPaginator.helpers';
import styles from './HistoricalEventsPaginator.module.scss';
import { ArrowIcon } from '~/assets/icons';

interface HistoricalEventsPaginatorProps {
  historicalElementsData: CircleOfHistoricalEventsDataItem[];
  onSelectHistoricalEventId: (id: string) => void;
  currentHistoricalEventId: string;
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

  const isPrevDisabled = idx === 0;
  const isNextDisabled = idx === historicalElementsData.length - 1;
  const displayData = getDisplayData(idx + 1, historicalElementsData.length, 2);

  return (
    <div className={styles.HistoricalEventsPaginator}>
      <div className={styles.display}>{displayData}</div>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.button}
          onClick={handlePev}
          disabled={isPrevDisabled}
        >
          <ArrowIcon isRight={false} />
        </button>
        <button
          className={styles.button}
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          <ArrowIcon isRight={true} />
        </button>
      </div>
    </div>
  );
}
