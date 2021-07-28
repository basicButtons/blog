import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import MasonryPost from "./masonry-post"

SwiperCore.use([EffectCoverflow]);

export default function Carousel({posts}) {
    
    return (
        <Swiper effect="coverflow"
            spaceBetween={30}
            slidesPerView={3}
        >
        {posts.map((item,index)=>
            <SwiperSlide key={index}><MasonryPost post={item} /></SwiperSlide>
        )}
        </Swiper>
    )
}
