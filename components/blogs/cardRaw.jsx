import React from "react";

const CardRaw = ({ title, image, data, setExpanded, setImage, setTitle, setData }) => {
    return (
        <div className="bg-gradient-to-b from-[#003F4C] to-transparent w-full lg:w-[1000px] rounded-md p-2 flex flex-col lg:flex-row gap-4">
            <img
                src="https://img.freepik.com/premium-photo/big-data-flow-blockchain-data-fields-network-ai-generated-art-work_844516-149.jpg"
                title="Title of image"
                alt="alt text here"
                className="h-36 object-cover lg:w-2/6 rounded-md"
            />
            <div className="flex flex-col lg:w-4/6 text-left">
                <p className="font-bold text-xl">{title}</p>
                <p className="text-left">{data.slice(0, 200)}</p>
                <button
                    className="cursor-pointer font-medium underline text-sky-500"
                    onClick={() => {
                        setImage(image);
                        setTitle(title);
                        setData(data);
                        setExpanded(true);
                    }}
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default CardRaw;
