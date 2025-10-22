import { useRef, useState } from 'react';
import styles from './EventSwiper.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { EventCard, Event } from '@/entities/event';
import { NavButton } from '@/shared/ui/nav-button';
import { ReactComponent as ArrowIcon } from '@/shared/assets/icons/SmallArrow.svg';
import { SvgIconWrapper } from '@/shared/ui/svg-icon-wrapper';

interface EventSwiperProps {
  events: Event[];
  showNavigation: boolean;
  activeCategoryId: number;
}

export const EventSwiper = ({
  events,
  activeCategoryId,
  showNavigation = true,
}: EventSwiperProps) => {
  const [_, setInit] = useState<boolean>(false);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={styles.swiperWrap}>
      {!showNavigation && (
        <div className={styles.navBtnWrapper}>
          <NavButton
            ref={prevRef}
            className={clsx(styles.navBtnPrev, styles.navBtn)}
            size="small"
            shadow={true}
          >
            <SvgIconWrapper
              Svg={ArrowIcon}
              width={'5px'}
              height={'10px'}
              color="var(--secondary-blue-color)"
              direction="prev"
            />
          </NavButton>
          <NavButton
            ref={nextRef}
            className={clsx(styles.navBtnNext, styles.navBtn)}
            size="small"
            shadow={true}
          >
            <SvgIconWrapper
              Svg={ArrowIcon}
              width={'5px'}
              height={'10px'}
              color="var(--secondary-blue-color)"
            />
          </NavButton>
        </div>
      )}
      <Swiper
        key={activeCategoryId}
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        centeredSlides={false}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesOffsetAfter: 40,
            slidesOffsetBefore: 40,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 80,
            slidesOffsetAfter: 80,
          },
        }}
        navigation={
          !showNavigation && prevRef.current && nextRef.current
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
                disabledClass: String(styles.isDisabled),
              }
            : false
        }
        watchOverflow={true}
        onInit={() => setInit(true)}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className={styles.slide}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
