import React from "react";
import ProgressBar from "../ProgressBar";

interface TicketFormHeaderProps {
  step: number;
  title: string;
}

const TicketFormHeader: React.FC<TicketFormHeaderProps> = ({ step, title }) => {
  return (
    <div>
      <div className="header md:flex block md:justify-between md:items-center">
        <div className="font-normal font-[JejuMyeongjo] text-white text-lg md:text-2xl">
          {title}
        </div>
        <div className="md:mt-0 mt-1 text-sm md:text-base">Step {step}/3</div>
      </div>
      <div className="my-3">
        <ProgressBar step={step} />
      </div>
    </div>
  );
};

export default TicketFormHeader;
