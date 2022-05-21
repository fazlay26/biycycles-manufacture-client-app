import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './SingleReview.css'

const SingleReview = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'CalihtmlFornia',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'CalihtmlFornia',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'CalihtmlFornia',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card sm:max-w-sm bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</h2>
                        </div>
                        <div className=''>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-10">
                                    <img src='https://prestashoptheme.in/prs/PRS713/modules/tt_testimonialslider/views/img/testimonial_img1.jpg' alt='' />
                                </div>
                            </div>
                            <div>
                                <h1>Winson Herry</h1>
                                <h4>CalihtmlFornia</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card sm:max-w-sm bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</h2>
                        </div>
                        <div className=''>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-10">
                                    <img src='https://prestashoptheme.in/prs/PRS713/modules/tt_testimonialslider/views/img/testimonial_img1.jpg' alt='' />
                                </div>
                            </div>
                            <div>
                                <h1>Winson Herry</h1>
                                <h4>CalihtmlFornia</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</h2>
                        </div>
                        <div className=''>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-10">
                                    <img src='https://prestashoptheme.in/prs/PRS713/modules/tt_testimonialslider/views/img/testimonial_img1.jpg' alt='' />
                                </div>
                            </div>
                            <div>
                                <h1>Winson Herry</h1>
                                <h4>CalihtmlFornia</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</h2>
                        </div>
                        <div className=''>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-10">
                                    <img src='https://prestashoptheme.in/prs/PRS713/modules/tt_testimonialslider/views/img/testimonial_img1.jpg' alt='' />
                                </div>
                            </div>
                            <div>
                                <h1>Winson Herry</h1>
                                <h4>CalihtmlFornia</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</h2>
                        </div>
                        <div className=''>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-10">
                                    <img src='https://prestashoptheme.in/prs/PRS713/modules/tt_testimonialslider/views/img/testimonial_img1.jpg' alt='' />
                                </div>
                            </div>
                            <div>
                                <h1>Winson Herry</h1>
                                <h4>CalihtmlFornia</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default SingleReview;