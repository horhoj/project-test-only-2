import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './SliderBlock.module.scss';
import { InfoItem } from '~/App/data';

interface SliderBlockProps {
  slideListData: InfoItem[];
}
export function SliderBlock({ slideListData }: SliderBlockProps) {
  const [data, setData] = useState<InfoItem[]>(() => slideListData);
  const [isHide, setIsHide] = useState(false);

  const timerId1 = useRef<NodeJS.Timeout | null>(null);
  const timerId2 = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsHide(true);
    if (timerId1.current !== null) {
      clearTimeout(timerId1.current);
    }
    if (timerId2.current !== null) {
      clearTimeout(timerId2.current);
    }
    timerId1.current = setTimeout(() => setData(slideListData), 500);
    timerId2.current = setTimeout(() => {
      setIsHide(false);
    }, 700);
  }, [slideListData, setIsHide]);

  return (
    <div className={styles.SliderBlockExternalWrapper}>
      <div
        className={classNames(styles.SliderBlock, isHide && styles.sliderHide)}
      >
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={'auto'}
          spaceBetween={80}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} style={{ width: 'auto' }}>
              <div className={styles.slide}>
                <div className={styles.year}>{item.year}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
