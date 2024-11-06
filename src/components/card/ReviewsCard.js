import { Star, StarHalf } from "lucide-react";
import { useState, useEffect } from 'react';

const getRandomColor = () => {
    const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-orange-500"];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default function ReviewsCard() {
    const [bgColor, setBgColor] = useState('');
    useEffect(() => {
        setBgColor(getRandomColor());
    }, []);
    return (

        <div className="bg-gray-100 border rounded-lg p-4">
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-3 flex items-start justify-center">
                    <span className={`nameLetter ${bgColor} h-[55px] w-[55px] text-[25px] font-bold text-white rounded-full p-3 flex items-center justify-center`}>
                        S
                    </span>
                </div>

                <div className="col-span-9 flex flex-col justify-center">
                    <p className="font-bold mb-0">Sneha Verma</p>
                    <p className="text-sm text-gray-500">From Jaipur</p>
                </div>

                <div className="col-span-12">
                    <p className="text-yellow-500 mb-1 flex">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <StarHalf size={16} fill="currentColor" />
                    </p>
                    <p className="text-sm">
                        Finding my dream home in Jaipur seemed impossible until I discovered Parth Sarthi Builders. Their properties are not only beautifully designed but also located in prime areas. The customer service was top-notch, making my home-buying experience seamless and enjoyable!
                    </p>
                </div>
            </div>
        </div>

    )
}