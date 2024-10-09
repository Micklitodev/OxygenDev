import React from "react";

const Button = ({
  children,
  className,
  onClick,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: (e: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-2 py-2 border rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
