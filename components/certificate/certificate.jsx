"use client";
import TemplateBar from "./subcomponents/templateBar";
import Arrow from "./subcomponents/arrow";
import FullViewTemplate from "./subcomponents/fullViewTemplate";
import KycStatus from "../subcomponents/kycStatus/kycStatus";
import TextScroller from "../subcomponents/textScroller";
import { useState } from "react";

const Certificate = () => {
  //Temp State
  const [isVerified, setIsVerified] = useState(true);
  
  return (
    <>
     <TextScroller text ="This Page Still under Development (Mobile Version not ready)" />
    <div style={{width:"100%" ,display:"flex"}} >
      
    {
      !isVerified ? 
      <KycStatus /> :
      <>
        <TemplateBar />
        <Arrow />
        <FullViewTemplate />
      </>
    }
      
    </div>
    </>
  );
};

export default Certificate;
