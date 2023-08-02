import React from "react";

const CardBlock = ({ title, data, img }) => {
    return (<div className="bg-cyan-800 w-80 rounded-md p-2 flex flex-col items-center justify-center">
        <img src="//www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here" className="h-32 w-72 rounded-md" />
        <p className="font-bold text-xl">{title}</p>
        <p className="text-center">{data.slice(0, 50)}</p>
        <button className="cursor-pointer font-semibold">Read More</button>
    </div>)
};

export default CardBlock;
