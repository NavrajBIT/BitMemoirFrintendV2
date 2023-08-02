"use client"
import { useState } from "react";
import CardBlock from "./cardBlock";
import CardRaw from "./cardRaw";

const Blogs = () => {

    const [isExpanded, setIsExpanded] = useState(false)
    const blogData = [
        {
            title: "FIRST bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsnaaaaaaaaaaaaaddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatur,",
            img: "./assets/1.jpg"
        },
        {
            title: "2 bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsntur,",
            img: "./assets/1.jpg"
        },
        {
            title: "3 bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsntur,",
            img: "./assets/1.jpg"
        },
        {
            title: "4 bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsntur,",
            img: "./assets/1.jpg"
        },
        {
            title: "5 bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsntur,",
            img: "./assets/1.jpg"
        },
        {
            title: "6 bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsntur,",
            img: "./assets/1.jpg"
        },
        {
            title: "7 bLOG",
            data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde repellendus, cupiditate animi nostrum sint cumque distinctio consequusssssssssssddddddsndfdfdfdfdfddddddddddddddddddddtur,",
            img: "./assets/1.jpg"
        },


    ]

    const toggleData = () => {
        setIsExpanded(!isExpanded);
    };
    const latestBlogs = blogData.slice(-6).reverse(); // Get the first 6 elements
    const remBlogs = blogData.slice(0, -6).reverse(); // Get the remaining elements

    return (
        <>
            <div className="flex flex-col justify-center items-center mx-40 mt-10 gap-y-10">
                <div className="flex justify-between w-full">
                    <p className="text-white text-xl font-semibold  ">
                        Top Blogs
                    </p>
                    <div className="flex gap-4">
                        <p className="border px-2 cursor-pointer rounded-sm">Sort</p>
                        <p className="border px-2 cursor-pointer rounded-sm">Filter</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        latestBlogs.map((item, index) => {
                            return <CardBlock index={index} title={item.title} data={item.data} img={item.img} />
                        })
                    }
                </div>

                <div className="flex flex-col gap-y-5">
                    {
                        remBlogs.map((item, index) => {
                            return <CardRaw index={index} title={item.title} data={item.data} img={item.img} />
                        })
                    }
                </div>

            </div>
        </>
    )
};

export default Blogs;
