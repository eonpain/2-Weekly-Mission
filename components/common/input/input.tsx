import { ComponentPropsWithRef, FocusEvent, useState } from "react";
import Icon from "../Icon";
import styles from "./Input.module.css";

interface Props
  extends Omit<ComponentPropsWithRef<"input">, "type" | "className"> {
  type?: "text" | "password";
  error?: string | boolean;
}

export default function Input({
  type = "text",
  error,
  onBlur = () => {},
  ...props
}: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleClickPasswordToggle = () => {
    setPasswordVisible((pv) => !pv);
  };
  let inputType = "text";

  if (type === "password") {
    inputType = passwordVisible ? "text" : "password";
  }

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    onBlur(e);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.input_wrapper}
        data-isError={error === "" || !!error}
      >
        <input
          className={styles.input}
          type={inputType}
          onBlur={handleBlurInput}
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

