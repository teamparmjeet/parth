"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MoveRight, MoveLeft, ArrowRight } from 'lucide-react';
import FeaturedCard from "../card/featuredCard";
import Slider from "react-slick";



export default function Feature() {
    const [isMounted, setIsMounted] = useState(false);

    // Set the component as mounted on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);
    var settingsfet = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         
        arrows: true, // Enable arrows
       

    };
    return (
        <section className="py-10">
            <div className="container max-w-[90%] mx-auto">
                <p className="bg-gradient-to-l animate-bounce  font-semibold inline-block px-5 py-1 text-xs rounded-full text-white from-[#DAB221] to-[#352d60]">✨Featured</p>

                <div className="flex justify-between items-center mb-4 ">
                    <h2 className="text-3xl font-light text-[#2d2849]">Our <span className="font-bold">Feature Projects</span></h2>
                    <Link href={`/all`} className="sm:flex hidden py-3 px-10 rounded-full  items-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] text-white font-semibold my-3 leading-3 group  transition">
                        View All
                        <ArrowRight
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                            size={18} // Arrow icon size
                        />
                    </Link>
                </div>

                <div className="w-full relative">
                    {isMounted ? <Slider {...settingsfet}>
                        <div className="items">
                            <FeaturedCard />
                        </div>
                        <div className="items">
                            <FeaturedCard />
                        </div>


                    </Slider> : "Loading...."}
                    
                </div>
            </div>
        </section>
    )
}