import React from "react"
interface ButtonProps {
  buttonSize?: "big" | "medium" | "large";
  buttonStyle: "green" | "outlined",
  color?: string,
  children?: React.ReactNode
}

const TailwindButton: React.FC<ButtonProps> = ({
  buttonSize = "medium",
  buttonStyle,
  color,
  children,
}) => {
  const getButtonSizeClasses = () => {
    switch (buttonSize) {
      case "big":
        return "px-6 py-3 h-12";
      case "medium":
        return "px-5 py-3 h-10";
      case "large":
        return "w-full py-3";
      default:
        return "px-5 py-3 h-8";
    }
  };

  const getButtonStyleClasses = () => {
    switch (buttonStyle) {
      case "green":
        return "bg-[#19C819] border-[#FAFAFA] text-[#131313] hover:border-gray-400";
      case "outlined":
        return "bg-[#131313] border-[#FAFAFA] text-[#FAFAFA] hover:border-gray-400";
      default:
        return "";
    }
  };

  const buttonClasses = `font-inter font-semibold inline-flex items-center justify-center rounded-md border-2 transition duration-300 ${getButtonSizeClasses()} ${getButtonStyleClasses()} ${color}`;

  return <button className={buttonClasses}>{children}</button>;
};

export default TailwindButton;