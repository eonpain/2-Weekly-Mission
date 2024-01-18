import { ComponentPropsWithRef, useEffect } from "react";
import { useInput } from "../../FolderPage/hooks/useInput";
import Icon from "../Icon";
import styles from "./input.module.css";
interface Props
  extends Omit<ComponentPropsWithRef<"input">, "type" | "className"> {
  type?: "text" | "password" | "passwordConfirm";
}

export default function Input({
  type = "password",
  // onBlur,
  ...props
}: Props) {
  const {
    inputType,
    passwordVisible,
    handleSignup,
    handleSignin,
    handleClickPasswordToggle,
    // handleBlurInput,
    handleBlurSignup,
    // errorMessage,
  } = useInput({ type, onBlur });

  // const hasError = !!errorMessage;

  // const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  //   handleBlurInput(e);
  //   onBlur && onBlur(e);
  // };

  const handleSignupBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlurSignup(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          type={inputType}
          // onBlur={type === "password" && handleSignupBlur }
          {...props}
        />
        {type !== "text" ? (
          <button
            type="button"
            onClick={handleClickPasswordToggle}
            className={styles.password_visible_button}
          >
            <Icon
              name={passwordVisible ? "eye-off" : "eye-on"}
              className={styles.password_visible_icon}
            />
          </button>
        ) : null}
      </div>
      {/* {hasError ? (
        <small className={styles.error_message}>{errorMessage}</small>
      ) : null} */}
    </div>
  );
}
