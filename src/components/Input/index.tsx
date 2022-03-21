import React from "react";
import { InputProps } from "./interfaces";
import { InputElement } from "./styles";

function Input({ type, placeholder }: InputProps) {
  return <InputElement type={type} placeholder={placeholder} />;
}

export default Input;
