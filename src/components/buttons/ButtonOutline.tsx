import React from "react";

interface ButtonOutlineProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick?: (e: any) => void;
  disabled?: boolean;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  text,
  type,
  disabled,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className="w-full px-4 py-2 border cursor-pointer hover:border-[#549aa7] border-[#24A0B5] text-[#24A0B5] rounded-lg"
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
