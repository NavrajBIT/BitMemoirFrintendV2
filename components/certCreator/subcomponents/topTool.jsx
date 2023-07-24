import { useState } from "react";
import Image from "next/image";
import style from "../certCreator.module.css";

const TopTool = ({ icon, toolName, toolDescription, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <button
      className={style.toptool}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <Image height={20} width={20} alt="" src={"/icons/" + icon + ".svg"} />
      {showTooltip && (
        <div className={style.toptooltip}>
          <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>{toolName}</div>
          <div style={{ fontSize: "0.5rem" }}>{toolDescription}</div>
        </div>
      )}
    </button>
  );
};

export default TopTool;
