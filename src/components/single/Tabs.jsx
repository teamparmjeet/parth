"use client";
import { useState } from 'react';
import { Building2, PencilRuler, Building, ChartPie,HousePlus } from 'lucide-react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full border-gray-100 border">
            {/* Tab Header */}
            <div className="flex bg-[#e6ecfc] overflow-x-auto w-full">
                {/* Tab Buttons */}
                <button
                    className={`flex-1 py-2 text-center min-w-fit px-5 transition-colors duration-300
            ${activeTab === 0
                            ? 'border-b-4 border-[#1136cd] text-[#1136cd]'
                            : 'border-b-4 border-transparent text-gray-600 hover:text-[#1136cd] hover:border-[#1136cd]'
                        }`}
                    onClick={() => setActiveTab(0)}
                >
                    Overview
                </button>
                <button
                    className={`flex-1 py-2  min-w-fit px-5 text-center transition-colors duration-300
            ${activeTab === 1
                            ? 'border-b-4 border-[#1136cd] text-#1136cd'
                            : 'border-b-4 border-transparent text-gray-600 hover:text-[#1136cd] hover:border-[#1136cd]'
                        }`}
                    onClick={() => setActiveTab(1)}
                >
                    Location
                </button>
                <button
                    className={`flex-1 py-2  min-w-fit px-5 text-center transition-colors duration-300
            ${activeTab === 2
                            ? 'border-b-4 border-[#1136cd] text-[#1136cd]'
                            : 'border-b-4 border-transparent text-gray-600 hover:text-[#1136cd] hover:border-[#1136cd]'
                        }`}
                    onClick={() => setActiveTab(2)}
                >
                    Site Plan
                </button>
                <button
                    className={`flex-1 py-2 min-w-fit px-5 text-center transition-colors duration-300
            ${activeTab === 3
                            ? 'border-b-4 border-[#1136cd] text-[#1136cd]'
                            : 'border-b-4 border-transparent text-gray-600 hover:text-[#1136cd] hover:border-[#1136cd]'
                        }`}
                    onClick={() => setActiveTab(3)}
                >
                    Amenities
                </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-6">
                {/* Tab 1 Content */}
                {activeTab === 0 && (
                    <div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                            <div className="col-span-1 bg-[#fff5e4] rounded-md py-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-2 justify-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] rounded-full h-[55px] w-[55px]" >
                                    <Building2 size={25} className="text-white" />
                                </div>
                                <p className="text-[14px]  text-gray-500  my-1">Property Type</p>
                                <p className="mb-0 font-bold">Commercial Shops</p>

                            </div>

                            <div className="col-span-1 bg-[#fff5e4] rounded-md py-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-2 justify-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] rounded-full h-[55px] w-[55px]" >
                                    <PencilRuler size={25} className="text-white" />
                                </div>
                                <p className="text-[14px]  text-gray-500  my-1">Area Size                                </p>
                                <p className="mb-0 font-bold">93 - 2016 Sq.ft.</p>

                            </div>
                            <div className="col-span-1 bg-[#fff5e4] rounded-md py-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-2 justify-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] rounded-full h-[55px] w-[55px]" >
                                    <Building size={25} className="text-white" />
                                </div>
                                <p className="text-[14px]  text-gray-500  my-1">BHK</p>
                                <p className="mb-0 font-bold">3,4 BHK</p>

                            </div>

                            <div className="col-span-1 bg-[#fff5e4] rounded-md py-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-2 justify-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] rounded-full h-[55px] w-[55px]" >
                                    <ChartPie size={25} className="text-white" />
                                </div>
                                <p className="text-[14px]  text-gray-500  my-1">Possession Status</p>
                                <p className="mb-0 font-bold">Completed</p>

                            </div>
                            <div className="col-span-1 bg-[#fff5e4] rounded-md py-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-2 justify-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] rounded-full h-[55px] w-[55px]" >
                                    <HousePlus size={25} className="text-white" />
                                </div>
                                <p className="text-[14px]  text-gray-500  my-1">Available Plots</p>
                                <p className="mb-0 font-bold">15 Flat</p>

                            </div>

                            <div className="col-span-1 bg-[#fff5e4] rounded-md py-6 flex flex-col items-center justify-center">
                                <div className="flex items-center mb-2 justify-center bg-gradient-to-r from-[#DAB221] to-[#B07C0A] rounded-full h-[55px] w-[55px]" >
                                    <Building2 size={25} className="text-white" />
                                </div>
                                <p className="text-[14px]  text-gray-500  my-1">Area Size                                </p>
                                <p className="mb-0 font-bold">93 - 2016 Sq.ft.</p>

                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 2 Content */}
                {activeTab === 1 && (
                    <div>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9666694892594!2d75.71890714078326!3d26.904552885184845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f998111d0f%3A0x9a81eb225b04d8f5!2sPARTH%20SARTHI%20RESIDENCY%2C%20C-23A-C24-A!5e0!3m2!1sen!2sin!4v1728161615960!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                )}

                {/* Tab 3 Content */}
                {activeTab === 2 && (
                    <div>
                        <h2 className="text-xl font-bold">Tab 3 Heading</h2>
                        <p>Another HTML block inside Tab 3 content. Include any HTML or React component here.</p>
                    </div>
                )}

                {/* Tab 4 Content */}
                {activeTab === 3 && (
                    <div>
                        <h2 className="text-xl font-bold">Tab 4 Heading</h2>
                        <p>Some different content in Tab 4. You can include forms, images, or other elements.</p>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
