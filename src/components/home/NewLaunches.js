"use client";
import React from "react";
import parthCr from "@/public/Parth-Crown-1-1024x1024.jpg";
import New from "../card/new";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight } from 'lucide-react';

import Slider from "react-slick";
import Link from "next/link";


export default function NewLaunches() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true, // Enable center mode

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="py-10 bg-gradient-to-br relative overflow-hidden from-[#2d2849] to-[#352d60]">
 
            <div className="container flex flex-col items-center max-w-[90%] mx-auto relative">
                <div className='py-7'></div>
             
                <p className="lg:text-[100px] text-[60px] absolute top-[0]  text-center font-bold text-slate-200  uppercase animate-bounce opacity-10 mx-auto">New Launches</p>
                <h2 className="text-3xl text-center mb-10 mt-5  font-bold text-white ">New Launches  Projects </h2>
                <div className="w-full">
                    <Slider {...settings}>
                        <div className="px-2">
                            <New imageUrl={parthCr}
                                status="New"
                                title="Modern Apartment"
                                location="Jaipur, Rajasthan"
                                size="1800"
                                bhk="3" />
                        </div>
                        <div className="px-2">
                            <New imageUrl={parthCr}
                                status="New"
                                title="Modern Apartment"
                                location="Jaipur, Rajasthan"
                                size="1800"
                                bhk="3" />
                        </div>

                    </Slider>
                </div>

                <Link href={`/all`} className="flex py-3 px-10 rounded-full  items-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] text-white font-semibold my-3 leading-3 group  transition">
                    View All
                    <ArrowRight
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                        size={18} // Arrow icon size
                    />
                </Link>
            </div>
        </section>
    )
}