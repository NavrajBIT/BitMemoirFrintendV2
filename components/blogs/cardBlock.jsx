import React from "react";

const CardBlock = ({ title, data, img, setExpanded, setImage, setTitle, setData }) => {
    return (<div className="bg-[#003F4C] w-80 rounded-md p-2 flex flex-col items-center justify-center">
        <img src="https://img.freepik.com/premium-photo/big-data-flow-blockchain-data-fields-network-ai-generated-art-work_844516-149.jpg" title="Title of image" alt="alt text here" className="h-32 w-72 rounded-md" />
        <p className="font-bold text-xl">{title}</p>
        <p className="text-center">{data.slice(0, 50)}</p>
        <button className="cursor-pointer font-medium underline text-sky-500" onClick={() => {
            setImage(img)
            setTitle(title)
            setData(data)
            setExpanded(true)
        }}>Read More</button>
    </div>)
};

export default CardBlock;
