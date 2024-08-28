'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useCallback, useEffect } from 'react';
import styles from "@/styles/sass/card.module.sass";

export default function SwiperPage({ slug }) {
    console.log(slug);
  
    const parseImg = (slugIMG) => {
      const slides = [];
      for (let i = 1; i <= 8; i++) {
        slides.push(
          <SwiperSlide key={i}>
            <img className = {styles.img_slider} src={`/_src/img_cards/${slugIMG}/${i}.jpeg`} alt="" />
          </SwiperSlide>
        );
      }
      return slides;
    };
  
    return (
      <>
        <div className={styles.wrapper_slider}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
              nextEl: ".card-slider-button-next",
              prevEl: ".card-slider-button-prev",
            }}
            loop={true}
          >
            {parseImg(slug)} {/* Pass the slug prop as an argument */}
          </Swiper>
          <div className={styles.buttons_card}>
            <div className="nav-button card-slider-button-prev card-button">
              <img src="/_src/Arrow-left.webp" alt="" />
            </div>
            <div className="nav-button card-slider-button-next card-button">
              <img src="/_src/Arrow-right.webp" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }