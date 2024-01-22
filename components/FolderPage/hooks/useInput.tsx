import React,{ useState } from "react";

export const useInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleClickPasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  return {
    passwordVisible,
    handleClickPasswordToggle,
  };
};
