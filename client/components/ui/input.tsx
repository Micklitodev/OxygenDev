import React from "react";
import { InputProps } from "@/lib/types";

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  className, 

}: any) => {
  return (
    <input
      className={`${className} rounded py-2 px-2 flex wrap bg-zinc-800 text-zinc-600`}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
