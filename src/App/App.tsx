import { useMemo, useState } from 'react';
import styles from './App.module.scss';
import {
  dataForCircleOfHistoricalEvents,
  getDataForCurrentHistoricalDataItemId,
} from './data';
import { CircleOfHistoricalEvents } from '~/components/CircleOfHistoricalEvents';
import { VeryBigYear } from '~/components/VeryBigYear';
import { HistoricalEventsPaginator } from '~/components/HistoricalEventsPaginator';

export function App() {
  const [currentHistoricalEventId, setCurrentHistoricalEventId] = useState(1);

  const currentDataItem = useMemo(
    () => getDataForCurrentHistoricalDataItemId(currentHistoricalEventId),
    [currentHistoricalEventId],
  );

  return (
    <div className={styles.App}>
      {currentDataItem && (
        <>
          <div className={styles.veryBigYearWrapper}>
            <VeryBigYear type={'startYear'} year={currentDataItem.startYear} />
            <VeryBigYear type={'endYear'} year={currentDataItem.endYear} />
          </div>
          <div className={styles.circleOfHistoricalEventsWrapper}>
            <CircleOfHistoricalEvents
              historicalElementsData={dataForCircleOfHistoricalEvents}
              onSelectHistoricalEventId={setCurrentHistoricalEventId}
              currentHistoricalEventId={currentHistoricalEventId}
            />
          </div>
          <div className={styles.HistoricalEventsPaginator}>
            <HistoricalEventsPaginator
              historicalElementsData={dataForCircleOfHistoricalEvents}
              onSelectHistoricalEventId={setCurrentHistoricalEventId}
              currentHistoricalEventId={currentHistoricalEventId}
            />
          </div>
        </>
      )}
    </div>
  );
}
