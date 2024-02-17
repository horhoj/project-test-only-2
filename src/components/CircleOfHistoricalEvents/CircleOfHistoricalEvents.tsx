import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './CircleOfHistoricalEvents.module.scss';
import { CircleOfHistoricalEventsDataItem } from './CircleOfHistoricalEvents.types';
import { getTransformData } from './CircleOfHistoricalEvents.helpers';

interface CircleOfHistoricalEventsProps {
  historicalElementsData: CircleOfHistoricalEventsDataItem[];
  onSelectHistoricalEventId: (id: string) => void;
  currentHistoricalEventId: string;
}

const TOTAL_OFFSET_FOR_THE_POSITION_OF_THE_ACTIVE_HISTORY_ELEMENT = 75;

export function CircleOfHistoricalEvents({
  historicalElementsData,
  currentHistoricalEventId,
  onSelectHistoricalEventId,
}: CircleOfHistoricalEventsProps) {
  const [angle, setAngle] = useState(0);
  const [transformTransitionSpeed, setTransformTransitionSpeed] = useState(0);
  const prevHistoricalEventId = useRef<string>(currentHistoricalEventId);

  const handleSelectHistoricalEvent = (id: string) => {
    prevHistoricalEventId.current = currentHistoricalEventId;
    onSelectHistoricalEventId(id);
  };

  useEffect(() => {
    const idxForNewPosition = historicalElementsData.findIndex(
      (el) => el.id === currentHistoricalEventId,
    );

    const idxForCurrentPosition = historicalElementsData.findIndex(
      (el) => el.id === prevHistoricalEventId.current,
    );

    const transformData = getTransformData({
      idxForNewPosition,
      idxForCurrentPosition,
      length: historicalElementsData.length,
      currentAngle: angle,
    });

    if (transformData) {
      setAngle(transformData.angle);
      setTransformTransitionSpeed(transformData.transformTransitionSpeed);
      prevHistoricalEventId.current = currentHistoricalEventId;
    }
  }, [
    historicalElementsData,
    currentHistoricalEventId,
    onSelectHistoricalEventId,
  ]);

  return (
    <div>
      <div className={styles.CircleOfHistoricalEvents}>
        <div className={styles.border} />
        {historicalElementsData.map((el, index) => (
          <div
            key={el.id}
            className={styles.squareEx}
            style={{
              transform: `rotateZ(${
                index * (360 / historicalElementsData.length) +
                TOTAL_OFFSET_FOR_THE_POSITION_OF_THE_ACTIVE_HISTORY_ELEMENT -
                angle
              }deg)`,
              transition: `transform ${transformTransitionSpeed}ms`,
            }}
          >
            <div className={styles.square}>
              <div
                className={styles.historicalEvent}
                style={{
                  transform: `rotateZ(${
                    -(index * (360 / historicalElementsData.length)) -
                    TOTAL_OFFSET_FOR_THE_POSITION_OF_THE_ACTIVE_HISTORY_ELEMENT +
                    angle
                  }deg)`,
                  transition: `transform ${transformTransitionSpeed}ms`,
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
                  style={{
                    transition: `transform ${transformTransitionSpeed}ms, opacity ${transformTransitionSpeed}ms`,
                  }}
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
