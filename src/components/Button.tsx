import React, { ButtonHTMLAttributes, FunctionComponent, PropsWithChildren, useMemo } from "react";

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "danger" | "secondary";
};

const Button: FunctionComponent<PropsWithChildren<ButtonPros>> = ({
  children,
  ...props
}) => {
    const {variant, onClick} = props;
  const variantClasses = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 text-white";
      case "danger":
        return "bg-red-700 hover:bg-red-800 focus:ring-red-300 text-white";
      case "secondary":
        return "bg-green-700 hover:bg-green-800 focus:ring-green-300 text-white";
      default:
        return "bg-white hover:bg-white focus:ring-white text-black"
    }
  }, [variant]);
  return (
    <button onClick={onClick} className={`focus:ring-4 rounded-lg px-4 py-2 text-sm focus:outline-none ${variantClasses}`}>
      {children}
    </button>
  );
};

export default Button;
