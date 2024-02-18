import { useMemo, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
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
  const windowSize = useWindowSize();

  const [currentHistoricalEventId, setCurrentHistoricalEventId] = useState(
    () => dataForCircleOfHistoricalEvents[0].id,
  );

  const currentDataItem = useMemo(
    () => getDataForCurrentHistoricalDataItemId(currentHistoricalEventId),
    [currentHistoricalEventId],
  );

  const isMobile = windowSize.width !== null && windowSize.width <= 600;

  return (
    <div className={styles.App}>
      {currentDataItem && (
        <>
          {!isMobile && (
            <>
              <div className={styles.verticalLine} />
              <div className={styles.horizontalLine} />
            </>
          )}
          <div className={styles.topBlock}>
            {!isMobile && (
              <div className={styles.circleOfHistoricalEventsWrapper}>
                <CircleOfHistoricalEvents
                  historicalElementsData={dataForCircleOfHistoricalEvents}
                  onSelectHistoricalEventId={setCurrentHistoricalEventId}
                  currentHistoricalEventId={currentHistoricalEventId}
                />
              </div>
            )}
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
            {!isMobile && (
              <div className={styles.HistoricalEventsPaginatorWrapper}>
                <HistoricalEventsPaginator
                  historicalElementsData={dataForCircleOfHistoricalEvents}
                  onSelectHistoricalEventId={setCurrentHistoricalEventId}
                  currentHistoricalEventId={currentHistoricalEventId}
                />
              </div>
            )}
          </div>

          <div className={styles.SliderBlockWrapper}>
            <SliderBlock
              slideListData={currentDataItem.info}
              isMobile={isMobile}
            >
              {isMobile && (
                <HistoricalEventsPaginator
                  historicalElementsData={dataForCircleOfHistoricalEvents}
                  onSelectHistoricalEventId={setCurrentHistoricalEventId}
                  currentHistoricalEventId={currentHistoricalEventId}
                />
              )}
            </SliderBlock>
          </div>
        </>
      )}
    </div>
  );
}
