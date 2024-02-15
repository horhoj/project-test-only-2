import classNames from 'classnames';
import styles from './CircleOfHistoricalEvents.module.scss';
import { CircleOfHistoricalEventsDataItem } from './CircleOfHistoricalEvents.types';

interface CircleOfHistoricalEventsProps {
  historicalElementsData: CircleOfHistoricalEventsDataItem[];
  onSelectHistoricalEventId: (id: number) => void;
  currentHistoricalEventId: number;
}

const TOTAL_OFFSET_FOR_THE_POSITION_OF_THE_ACTIVE_HISTORY_ELEMENT = 150;

export function CircleOfHistoricalEvents({
  historicalElementsData,
  currentHistoricalEventId,
  onSelectHistoricalEventId,
}: CircleOfHistoricalEventsProps) {
  const handleSelectHistoricalEvent = (id: number) => {
    onSelectHistoricalEventId(id);
  };

  const currentHistoricalEventIdx = historicalElementsData.findIndex(
    (el) => el.id === currentHistoricalEventId,
  );

  const currentOffsetForThePositionOfTheActiveHistoricalElement =
    currentHistoricalEventId === -1
      ? 0
      : (360 / historicalElementsData.length) * (currentHistoricalEventIdx + 1);

  return (
    <div>
      <div className={styles.CircleOfHistoricalEvents}>
        {historicalElementsData.map((el, index) => (
          <div
            key={el.id}
            className={styles.squareEx}
            style={{
              transform: `rotateZ(${
                index * (360 / historicalElementsData.length) +
                TOTAL_OFFSET_FOR_THE_POSITION_OF_THE_ACTIVE_HISTORY_ELEMENT -
                currentOffsetForThePositionOfTheActiveHistoricalElement
              }deg)`,
            }}
          >
            <div className={styles.square}>
              <div
                className={styles.historicalEvent}
                style={{
                  transform: `rotateZ(${
                    -(index * (360 / historicalElementsData.length)) -
                    TOTAL_OFFSET_FOR_THE_POSITION_OF_THE_ACTIVE_HISTORY_ELEMENT +
                    currentOffsetForThePositionOfTheActiveHistoricalElement
                  }deg)`,
                }}
              >
                <button
                  className={classNames(
                    styles.historicalEventButton,
                    currentHistoricalEventId === el.id &&
                      styles.historicalEventButtonActive,
                  )}
                  onClick={() => handleSelectHistoricalEvent(el.id)}
                  tabIndex={-1}
                >
                  {el.buttonTitle}
                </button>
                <div
                  className={classNames(
                    styles.title,
                    currentHistoricalEventId === el.id && styles.titleActive,
                  )}
                >
                  {el.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
