import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Flip, EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.scss';
import { TripList } from './TripList';
import { TripPreview } from './TripPreview';
import { utils } from '../../services/utils';



SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y]);



const coverflow = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
}

export function TripSlider({ trips }) {


    return (
        <Swiper
            spaceBetween={200}
            effect="coverflow"
            slidesPerView={1}
            navigation
            coverflowEffect
            rotate={100}
            stretch={500}
            depth={200}
            modifier={2} 
            centeredSlides={ true}
            // slidesPerView={'auto'}
            // autoplay={true}
             


        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >


            {
                trips.map((i, el) => {
                    return <SwiperSlide key={utils.makeId()}>
                        <TripList trips={i} addClass={'slider'} />
                    </SwiperSlide>;
                })
            }
        </Swiper >
    );
};