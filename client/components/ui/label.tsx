import React from "react";
import { LabelProps } from "@/lib/types";

const Label: React.FC<LabelProps> = ({ htmlFor, children }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
