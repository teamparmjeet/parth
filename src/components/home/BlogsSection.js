"use client"; 
import React, { useEffect, useState } from "react";
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight } from 'lucide-react';
import Slider from "react-slick";
import BlogCard from "../card/BlogCard";

export default function BlogsSection() {
    const [isMounted, setIsMounted] = useState(false);

    // Set the component as mounted on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Slider settings
    var setting5 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };

    // Render the component only if it is mounted on the client
    return (
        <section className="bg-[#fff5e4] py-16">
            <div className="container max-w-[90%] mx-auto">
                <p className="bg-gradient-to-l animate-bounce font-semibold inline-block px-5 py-1 text-xs rounded-full text-white from-[#DAB221] to-[#352d60]">✨Articles</p>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-light text-[#2d2849]">
                        Our <span className="font-bold">Blogs</span>
                    </h2>
                    <Link href={`/all`} className="sm:flex hidden py-3 px-10 rounded-full items-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] text-white font-semibold my-3 leading-3 group transition">
                        View All
                        <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" size={18} />
                    </Link>
                </div>

                <div className="w-full relative">
                    {isMounted ? (
                        <Slider {...setting5}>
                            <div className="items px-2">
                                <BlogCard />
                            </div>
                            <div className="items px-2">
                                <BlogCard />
                            </div>
                        </Slider>
                    ) : (
                        <div>Loading...</div> 
                    )}
                </div>
            </div>
        </section>
    );
}
