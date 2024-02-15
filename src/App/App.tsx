import { useState } from 'react';
import styles from './App.module.scss';
import { dataForCircleOfHistoricalEvents } from './data';
import { CircleOfHistoricalEvents } from '~/components/CircleOfHistoricalEvents';

export function App() {
  const [currentHistoricalEventId, setCurrentHistoricalEventId] = useState(1);

  return (
    <div className={styles.App}>
      <CircleOfHistoricalEvents
        historicalElementsData={dataForCircleOfHistoricalEvents}
        onSelectHistoricalEventId={setCurrentHistoricalEventId}
        currentHistoricalEventId={currentHistoricalEventId}
      />
    </div>
  );
}
