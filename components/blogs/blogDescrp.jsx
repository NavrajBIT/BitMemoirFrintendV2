import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
const BlogDescrp = ({ image, title, data, setExpanded }) => {
    return (
        <div>
            <div className="max-w-screen-lg mx-auto">
                <main className="mt-10">
                    <button
                        onClick={() => {
                            setExpanded(false);
                        }}
                        className="text-3xl mb-7 flex gap-3"
                    >
                        <IoArrowBackCircle />
                        <p className="text-xl font-semibold">Back</p>
                    </button>
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 lg:px-0">
                            <h2 className="text-4xl font-semibold text-white leading-tight">
                                {title}
                            </h2>
                        </div>

                        <img
                            src="https://img.freepik.com/premium-photo/big-data-flow-blockchain-data-fields-network-ai-generated-art-work_844516-149.jpg"
                            className="w-full h-[400px] lg:w-[1000px] lg:h-[400px] lg:rounded mx-auto mt-4 rounded-md"
                            alt="Blog"
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12 w-full lg:max-w-screen-lg mx-auto">
                        <div className="px-4 lg:px-0 mt-12 text-white-700 text-lg text-start leading-relaxed lg:w-3/4 overflow-wrap break-word">
                            {data}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BlogDescrp;

