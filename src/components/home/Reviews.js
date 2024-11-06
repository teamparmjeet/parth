"use client";
import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import ReviewsCard from "../card/ReviewsCard";

export default function Reviews() {
    var settings3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
             
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="py-10">
            <div className="container flex flex-col items-center max-w-[90%] mx-auto relative">
                <p className="bg-gradient-to-r animate-bounce mb-2 font-semibold inline-block px-5 py-1 text-sm rounded-full text-white from-[#DAB221] to-[#B07C0A]">ParthSarthi Developers</p>
                <h2 className="text-3xl mb-4 font-light text-[#2d2849]">Our <span className="font-bold"> Testimonials</span></h2>
                <div className="w-full">
                    <Slider {...settings3}>
                        <div className="px-2">
                            <ReviewsCard />
                        </div>
                        <div className="px-2">
                            <ReviewsCard />
                        </div>
                        <div className="px-2">
                            <ReviewsCard />
                        </div>

                    </Slider>
                </div>

            </div>
        </section>
    )
}