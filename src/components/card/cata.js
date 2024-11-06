import Image from 'next/image';
import Link from 'next/link';
 


export default function Cata({ imageUrl, title }) {
    return (
        <Link href="/property/1" className="block bg-white duration-300">
            {/* Property Image with Label */}
            <div className="relative p-0 m-0 rounded-3xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="Property Image"

                    className="w-full"
                />

            </div>

            {/* Property Info */}
            <div className="p-3 d-flex items-center justify-center text-center">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#2d2849] truncate">{title}</h3>
            </div>
        </Link>
    )
}