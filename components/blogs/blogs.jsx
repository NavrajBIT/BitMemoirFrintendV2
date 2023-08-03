"use client"

import React, { useState } from "react";
import CardBlock from "./cardBlock";
import CardRaw from "./cardRaw";
import BlogDescrp from "./blogDescrp";
import { blogData } from "./blogData";

const Blogs = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [data, setData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const latestBlogs = blogData.slice(-6).reverse(); // Get the first 6 elements
    const remBlogs = blogData.slice(0, -6).reverse(); // Get the remaining elements

    const totalPages = Math.ceil(remBlogs.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const test = () => {
        console.log(isExpanded);
    };

    return isExpanded ? (
        <BlogDescrp setExpanded={setIsExpanded} title={title} image={image} data={data} />
    ) : (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center mt-10 gap-y-10">
                    <div className="flex justify-between w-full">
                        <p className="text-white text-xl font-semibold">Top Blogs</p>
                        <div className="flex gap-4">
                            <p className="border px-2 cursor-pointer rounded-sm">Sort</p>
                            <p className="border px-2 cursor-pointer rounded-sm">Filter</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {latestBlogs.map((item, index) => (
                            <CardBlock
                                key={index}
                                index={index}
                                title={item.title}
                                data={item.data}
                                img={item.img}
                                setTitle={setTitle}
                                setImage={setImage}
                                setData={setData}
                                setExpanded={setIsExpanded}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col gap-y-5">
                        {remBlogs
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((item, index) => (
                                <CardRaw
                                    key={index}
                                    index={index}
                                    title={item.title}
                                    data={item.data}
                                    img={item.img}
                                    setExpanded={setIsExpanded}
                                    setTitle={setTitle}
                                    setImage={setImage}
                                    setData={setData}
                                />
                            ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex gap-2 mt-4">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-3 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Blogs;
