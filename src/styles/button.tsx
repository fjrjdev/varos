interface ButtonProps {
  buttonSize?: "big" | "medium" | "large",
  buttonStyle: "green" | "outlined" | "greenRounded",
  color?: string,
  children?: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined;
}

const TailwindButton = ({
  buttonSize = "medium",
  buttonStyle,
  color = "",
  children,
  type = "button"
}: ButtonProps) => {
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
        return "bg-[#19C819] border-[#FAFAFA] text-[#131313] hover:border-gray-400 justify-center";
      case "outlined":
        return "bg-[#131313] border-[#FAFAFA] text-[#FAFAFA] hover:border-gray-400  justify-center";
      case "greenRounded":
        return "bg-[#155b15] text-[#00F700] max-w-[220px] border border-[#155b15] rounded-[48px] justify-around";
      default:
        return "";
    }
  };

  const buttonClasses = `font-inter font-semibold inline-flex items-center border-2 transition duration-300 ${getButtonSizeClasses()} ${getButtonStyleClasses()} ${color}`;

  return <button type={type} className={buttonClasses}>{children}</button>;
};

export default TailwindButton;