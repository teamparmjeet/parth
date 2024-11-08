import Image from 'next/image';
import Link from 'next/link';
import { Home, Maximize2, MapPin } from 'lucide-react';


export default function New({ imageUrl, status, title, location, size, bhk }){
    return(
        <Link href="/property/1" className="block bg-white border border-gray-200 p-0 shadow-lg rounded-2xl  overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {/* Property Image with Label */}
                            <div className="relative p-0 m-0  overflow-hidden">
                                <Image
                                    src={imageUrl}
                                    alt="Property Image"

                                    className="w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                {/* Label (New, Sold, Coming Soon, Almost Sold) */}
                                <span className="absolute top-2 left-2 bg-gradient-to-r mb-2 font-semibold inline-block px-3 py-0.5 text-[10px] rounded-full text-white from-[#26ff35] to-[#16911e]">
                                    {status}
                                </span>
                            </div>

                            {/* Property Info */}
                            <div className="p-4">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#2d2849] truncate">{title}</h3>

                                {/* Location */}
                                <p className="flex items-center text-sm text-gray-500 mt-1">
                                    <MapPin className="w-4 h-4 mr-1 text-[#CC9B18]" /> {location}
                                </p>

                                {/* Property Details (Sq Feet, BHK) */}
                                <div className="flex items-center justify-between mt-3 border-t pt-3">
                                    <span className="flex items-center text-[12px] text-gray-600">
                                        <Maximize2 size={12} className=" mr-2 text-gray-400" /> {size} Sq. Ft
                                    </span>
                                    <span className="flex items-center text-[12px] text-gray-600">
                                        <Home size={12} className="mr-2 text-gray-400" /> {bhk} BHK
                                    </span>
                                </div>
                            </div>
                        </Link>
    )
}