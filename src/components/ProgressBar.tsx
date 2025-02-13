import React from "react";

interface ProgressBarProps {
  step: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const progress = (step / 3) * 100; 
  return (
    <div className="w-full flex">
      <div className="w-full h-2 bg-[#0E464F] rounded-full relative">
        <div
          className="h-2 bg-[#24A0B5] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
