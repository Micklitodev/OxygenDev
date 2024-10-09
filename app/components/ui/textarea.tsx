import React from "react";

const Textarea = ({
  className,
  id,
  placeholder,
}: {
  className: string;
  id: string;
  placeholder: string;
}): JSX.Element => {
  return (
    <textarea
      className={`flex wrap rounded bg-zinc-800 text-zinc-600 ${className}`}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Textarea;
