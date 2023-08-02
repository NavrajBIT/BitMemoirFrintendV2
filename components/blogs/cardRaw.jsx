import React from "react";

const CardRaw = ({ title, image, data }) => {
    return (
        <div className="bg-cyan-800 w-[1000px] rounded-md p-2 flex gap-4">
            <img src="//www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here" className="h-36 object-fill w-2/6 rounded-md" />
            <div className="flex flex-col w-4/6 text-left">
                <p className="font-bold text-xl">{title}</p>
                <p className="text-left h-full">{data.slice(0, 200)}</p>
                <button className="cursor-pointer font-semibold">Read More</button>
            </div>
        </div>
    );
};

export default CardRaw;
