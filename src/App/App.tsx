import { useMemo, useState } from 'react';
import styles from './App.module.scss';
import {
  dataForCircleOfHistoricalEvents,
  getDataForCurrentHistoricalDataItemId,
} from './data';
import { CircleOfHistoricalEvents } from '~/components/CircleOfHistoricalEvents';
import { VeryBigYear } from '~/components/VeryBigYear';
import { HistoricalEventsPaginator } from '~/components/HistoricalEventsPaginator';
import { SliderBlock } from '~/components/SliderBlock';
import { HistoricalDateBigTitle } from '~/components/HistoricalDateBigTitle';

export function App() {
  const [currentHistoricalEventId, setCurrentHistoricalEventId] = useState(
    () => dataForCircleOfHistoricalEvents[0].id,
  );

  const currentDataItem = useMemo(
    () => getDataForCurrentHistoricalDataItemId(currentHistoricalEventId),
    [currentHistoricalEventId],
  );

  return (
    <div className={styles.App}>
      {currentDataItem && (
        <>
          {/* <div className={styles.veryBigYearWrapper}>
            <VeryBigYear type={'startYear'} year={currentDataItem.startYear} />
            <VeryBigYear type={'endYear'} year={currentDataItem.endYear} />
          </div> */}
          <div className={styles.topBlock}>
            <div className={styles.circleOfHistoricalEventsWrapper}>
              <CircleOfHistoricalEvents
                historicalElementsData={dataForCircleOfHistoricalEvents}
                onSelectHistoricalEventId={setCurrentHistoricalEventId}
                currentHistoricalEventId={currentHistoricalEventId}
              />
            </div>
            <div className={styles.veryBigYearWrapper}>
              <VeryBigYear
                type={'startYear'}
                year={currentDataItem.startYear}
              />
              <VeryBigYear type={'endYear'} year={currentDataItem.endYear} />
            </div>
            <div className={styles.HistoricalDateBigTitleWrapper}>
              <HistoricalDateBigTitle />
            </div>
            <div className={styles.HistoricalEventsPaginatorWrapper}>
              <HistoricalEventsPaginator
                historicalElementsData={dataForCircleOfHistoricalEvents}
                onSelectHistoricalEventId={setCurrentHistoricalEventId}
                currentHistoricalEventId={currentHistoricalEventId}
              />
            </div>
          </div>

          <div className={styles.SliderBlockWrapper}>
            <SliderBlock slideListData={currentDataItem.info} />
          </div>
        </>
      )}
    </div>
  );
}
