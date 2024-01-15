import React,{ useState, FocusEvent, ComponentPropsWithRef } from "react";
interface UseInputProps extends Omit<ComponentPropsWithRef<"input">, "type"> {
  initialValue?: string;
  type?: "text" | "password" | "passwordConfirm";
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const useInput = ({ type = "password", onBlur, onChange }: UseInputProps = {}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleClickPasswordToggle = () => {
    setPasswordVisible((pv) => !pv);
  };

  return {
    passwordVisible,
    handleClickPasswordToggle,
  };
};
