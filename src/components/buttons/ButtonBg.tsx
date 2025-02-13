import React from "react";

interface ButtonBgProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick?: (e: any) => void;
  disabled?: boolean;
}

const ButtonBg: React.FC<ButtonBgProps> = ({ text, type,disabled, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className="w-full px-4 py-2 bg-[#24A0B5] cursor-pointer hover:bg-[#549aa7] text-white rounded-lg"
    >
      {text}
    </button>
  );
};

export default ButtonBg;
