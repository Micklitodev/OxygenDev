import React from "react";

const Textarea: React.FC<{
  className: string;
  id: string;
  placeholder: string;
}> = ({ className, id, placeholder }) => {
  return (
    <textarea
      className={`flex wrap rounded bg-zinc-800 text-zinc-600 ${className}`}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Textarea;
