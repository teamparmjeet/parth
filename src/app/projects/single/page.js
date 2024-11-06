
import Breadcrumb from "@/components/Breadcrumb";
import ImageGallery from "@/components/single/ImageGallery";
import parthCr from "@/public/Parth-Crown-1-1024x1024.jpg";
import Tabs from "@/components/single/Tabs";
import ReadMore from "@/components/single/ReadMore";
import { ArrowDownToLine } from "lucide-react";
import ContactForm from "@/components/single/ContactForm";

export async function generateMetadata() {
    return {
        title: "Vijay",
        description: "Vijay Description",

    };
}
const images = [
    parthCr,
    parthCr,
    parthCr,
    parthCr,
];
// console.log(images);
export default function SingleProject() {

    return (
        <>
            <section className="py-2 bg-[#e6ecfc]">
                <div className="container max-w-[90%] mx-auto">
                    <Breadcrumb customLabels={{ projects: 'Projects', single: 'Project Details' }} />
                </div>
            </section>
            <section className="py-4">
                <div className="container max-w-[90%] mx-auto">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="relative overflow-hidden bg-[#fff5e4] rounded-lg">
                                <span className="inline-block z-50 absolute top-6 text-xs -left-9 bg-red-500 py-1 text-white px-10 border-y transform -rotate-45">✨Featured</span>
                                <ImageGallery images={images} />
                            </div>

                            <div className="py-5">
                                <h1 className="text-2xl font-bold text-[#2d2849]">Parth Sarthi Residency</h1>
                                <p className="text-sm text-gray-400">New Sanganer Road, Mansarovar metro station</p>
                            </div>


                            <Tabs />

                            <ReadMore />

                            <div className="mt-5">
                                <button className="flex w-full text-center  justify-center py-7 px-10 rounded-full  items-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] text-white font-semibold my-3 leading-3 group  transition">
                                    Download Brochure
                                    <ArrowDownToLine className="ml-2 transition-transform duration-300 group-hover:translate-y-1 animate-bounce" size={18} />
                                </button>
                            </div>

                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <div className="max-w-lg mx-auto sticky top-1 p-5 bg-[white] border shadow-xl flex flex-col items-center rounded-xl justify-center">
                                <p className="bg-gradient-to-l animate-bounce font-semibold inline-block px-5 py-1 text-xs rounded-full text-white from-[#DAB221] to-[#352d60]">✨Get Offer </p>
                                <h4 className="text-md font-bold text-center mb-4 uppercase">Get Best Offer on this Project                                </h4>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}