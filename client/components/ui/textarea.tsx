import React from "react";

const Textarea = ({ className, id, placeholder }: any) => {
  return (
    <textarea className={`${className}`} placeholder={placeholder} id={id} />
  );
};

export default Textarea;
