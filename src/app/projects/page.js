"use client";
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { Search, X } from 'lucide-react';
import New from '@/components/card/new';
import parthCr from "@/public/Parth-Crown-1-1024x1024.jpg";

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset page
    };
    
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1); // Reset page
    };
    
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
        setCurrentPage(1); // Reset page
    };
    
    const removeFilter = (filterType) => {
        if (filterType === 'category') {
            setSelectedCategory('');
        } else if (filterType === 'status') {
            setSelectedStatus('');
        }
    };

    const projects = [
        // Example projects array
        { id: 1, status: "New", title: "Modern Apartment", location: "Jaipur, Rajasthan", size: "1800", bhk: "3" },
        { id: 2, status: "Sold Out", title: "Vijay Apartment", location: "Vaishali Jaipur, Rajasthan", size: "2400", bhk: "3, 4" },
        { id: 3, status: "New", title: "Lux Villa", location: "Mumbai, Maharashtra", size: "3500", bhk: "4" },
        { id: 4, status: "Sold Out", title: "Shyam Residency", location: "Delhi", size: "2200", bhk: "2" },
        { id: 5, status: "Coming Soon", title: "Green Valley", location: "Chennai, Tamil Nadu", size: "1600", bhk: "3" },
        { id: 6, status: "New", title: "Ocean View", location: "Goa", size: "3000", bhk: "4" },
        { id: 7, status: "Coming Soon", title: "Palm Resort", location: "Kerala", size: "5000", bhk: "5" },
        { id: 8, status: "Sold Out", title: "Sunshine Towers", location: "Ahmedabad", size: "2000", bhk: "3" },
        { id: 9, status: "New", title: "Silver Sands", location: "Pune, Maharashtra", size: "2800", bhk: "3" },
        // Add more projects...
    ];

    // Filter the projects based on search query, category, and status
    const filteredProjects = projects.filter(
        (project) =>
            (selectedCategory === '' || project.bhk === selectedCategory) &&
            (selectedStatus === '' || project.status === selectedStatus) &&
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="py-2 bg-[#e6ecfc]">
                <div className="container max-w-[90%] mx-auto">
                    <Breadcrumb customLabels={{ projects: 'Projects' }} />
                </div>
            </section>
            <section className="py-4">
                <div className="container max-w-[90%] mx-auto">
                    {/* Search and Filters */}
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="relative w-full lg:w-1/3">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="h-5 w-5 text-gray-400" /> {/* Lucide search icon */}
                            </span>
                            <input
                                type="text"
                                className="w-full pl-10 p-3 border text-sm border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#DAB221]"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex space-x-4">
                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="p-3 border border-gray-300 text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-[#DAB221]"
                            >
                                <option value="">All Categories</option>
                                <option value="3">3 BHK</option>
                                <option value="3, 4">3 ,4 BHK</option>
                                <option value="1">1 BHK</option>
                                {/* Add more categories as needed */}
                            </select>

                            {/* Status Filter */}
                            <select
                                value={selectedStatus}
                                onChange={handleStatusChange}
                                className="p-3 border border-gray-300 text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-[#DAB221]"
                            >
                                <option value="">All Statuses</option>
                                <option value="New">New</option>
                                <option value="Sold Out">Sold Out</option>
                                <option value="Coming Soon">Soon</option>
                                {/* Add more status options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4 space-x-2 space-y-2">
                        {selectedCategory && (
                            <div className="bg-yellow-100 text-yellow-600 text-sm px-4 py-2 rounded-full flex items-center space-x-2">
                                <span>Category: {selectedCategory}</span>
                                <X className="h-4 w-4 cursor-pointer" onClick={() => removeFilter('category')} /> {/* Close icon */}
                            </div>
                        )}
                        {selectedStatus && (
                            <div className="bg-yellow-100 text-yellow-600 text-sm px-4 py-2 rounded-full flex items-center space-x-2">
                                <span>Status: {selectedStatus}</span>
                                <X className="h-4 w-4 cursor-pointer" onClick={() => removeFilter('status')} /> {/* Close icon */}
                            </div>
                        )}
                    </div>
                    {/* Project Cards */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProjects.length > 0 ? (
                            currentProjects.map((project) => (
                                <New imageUrl={parthCr}
                                    status={project.status}
                                    title={project.title}
                                    location={project.location}
                                    size={project.size}
                                    bhk={project.bhk}
                                    key={project.id} />
                            ))
                        ) : (
                            <div className="text-center text-gray-500 col-span-full">No projects found.</div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
