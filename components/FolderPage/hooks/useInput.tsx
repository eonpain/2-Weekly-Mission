import { useState, FocusEvent, ComponentPropsWithRef } from "react";

interface UseInputProps
  extends Omit<ComponentPropsWithRef<"input">, "type"> {
  initialValue?: string;
  type?: "text" | "password";
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void; 
}

export const useInput = ({ type = "password", onBlur }: UseInputProps = {}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordToggle = () => {
    setPasswordVisible((pv) => !pv);
  };

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) { 
      onBlur(e); 
    }
  };

  const inputType = type === "password" ? (passwordVisible ? "text" : "password") : "text";

  return {
    inputType,
    passwordVisible,
    handleClickPasswordToggle,
    handleBlurInput,
  };
};
