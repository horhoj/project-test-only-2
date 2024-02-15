import { useState } from 'react';
import styles from './App.module.scss';
import { CircleOfHistoricalEventsDataItem } from '~/components/CircleOfHistoricalEvents/CircleOfHistoricalEvents.types';
import { CircleOfHistoricalEvents } from '~/components/CircleOfHistoricalEvents';

const data: CircleOfHistoricalEventsDataItem[] = [
  { id: 0, title: '1' },
  { id: 1, title: '2' },
  { id: 2, title: '3' },
  { id: 3, title: '4' },
  { id: 4, title: '5' },
  { id: 5, title: '6' },
];

export function App() {
  const [currentHistoricalEventId, setCurrentHistoricalEventId] = useState(0);

  return (
    <div className={styles.App}>
      <CircleOfHistoricalEvents
        historicalElementsData={data}
        onSelectHistoricalEventId={setCurrentHistoricalEventId}
        currentHistoricalEventId={currentHistoricalEventId}
      />
    </div>
  );
}
