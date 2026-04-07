'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = { src: string; title: string };

export function GallerySwiper({ slides }: { slides: Slide[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1.5, spaceBetween: 24 },
          1024: { slidesPerView: 1.5, spaceBetween: 28 },
        }}
        className="pb-10 portfolio-swiper"
      >
        {slides.map(({ src, title }) => (
          <SwiperSlide key={src}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-brand-ink-900 shadow-[0_12px_26px_rgba(0,0,0,0.35)]">
              <div className="relative h-[220px] w-full sm:h-[460px]">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="mt-1 text-2xl font-bold text-white">
                  {title}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
        }
      `}</style>
    </>
  );
}

