import { ComponentPropsWithRef } from "react";
import { useInput } from "../../FolderPage/hooks/useInput";
import Icon from "../Icon";
import styles from "./input.module.css";

interface Props
  extends Omit<ComponentPropsWithRef<"input">, "type" | "className"> {
  type?: "text" | "password";
  error?: string | boolean;
}

export default function Input({
  type = "password",
  error,
  onBlur,
  ...props
}: Props) {
  const {
    inputType,
    passwordVisible,
    handleClickPasswordToggle,
    handleBlurInput,
  } = useInput({ type, onBlur });

  return (
    <div className={styles.container}>
      <div
        className={styles.input_wrapper}
        data-isError={error === "" || !!error}
      >
        <input
          className={styles.input}
          type={inputType}
          onBlur={handleBlurInput} // useInput 훅에서 반환한 onBlur 함수를 사용
          {...props}
        />
        {type === "password" ? (
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
      {error && typeof error === "string" ? (
        <small className={styles.error_message}>{error}</small>
      ) : null}
    </div>
  );
}
