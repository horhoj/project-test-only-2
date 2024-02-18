import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './VeryBigYear.module.scss';

interface VeryBigYearProps {
  year: number;
  type: 'startYear' | 'endYear';
}
export function VeryBigYear({ year, type }: VeryBigYearProps) {
  const [viewYear, setViewYear] = useState(() => year);

  useEffect(() => {
    if (viewYear !== year) {
      setTimeout(() => {
        setViewYear((prev) => (prev > year ? -1 : 1) + prev);
      }, 100);
    }
  }, [year, viewYear]);

  return (
    <div className={classNames(styles.VeryBigYear, styles[type])}>
      {viewYear}
    </div>
  );
}
