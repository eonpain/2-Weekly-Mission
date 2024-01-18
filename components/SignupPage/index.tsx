import { ComponentPropsWithRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../SigninPage/styled";
import { useInput } from "../FolderPage/hooks/useInput";
import styles from "../SigninPage/input.module.css";
import Icon from "@/components/common/Icon";
import { signup } from "@/pages/signup/signup.api.ts";

interface InputType {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Props
  extends Omit<ComponentPropsWithRef<"input">, "type" | "className"> {
  type?: "text" | "password" | "passwordConfirm";
}

function Signup({ type = "password", onBlur, ...props }: Props) {
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | boolean>("");
  const [emailError, setEmailError] = useState<string | boolean>("");
  const [matchError, setMatchError] = useState<string | boolean>("");

  const {
    handleClickPasswordToggle,
    passwordVisible,
  } = useInput();

  const router = useRouter();
  const hasMatchError = !!isPasswordMatch;
  const hasError = !!errorMessage;
  const hasEmailError = !!emailError;

  const { register, handleSubmit, watch } = useForm<InputType>();
  const onSubmit: SubmitHandler<InputType> = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    handleSignup(userData);
  };

  const emailVal = watch("email");
  const passwordVal = watch("password");
  const passwordConfirmVal = watch('passwordConfirm');

  const handleConfirmPasswordChange = () => {
    // const confirmPassword = passwordConfirmVal;
    const isMatch = passwordConfirmVal !== passwordVal;
    setIsPasswordMatch(isMatch);
    setMatchError("비밀번호가 일치하지 않습니다");
  };

  const handleBlurSignup = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("asd");
    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    let newErrorMessage = errorMessage; // 이전 오류 메시지를 유지합니다.
    let emailErrorMessage = emailError; // 이전 이메일 오류 메시지를 유지합니다.

    if (e.target.name === "email") {
      if (!emailVal) {
        emailErrorMessage = "이메일을 입력해 주세요.";
      } else if (!isValidEmail(emailVal)) {
        emailErrorMessage = "올바른 이메일 주소가 아닙니다.";
      } else {
        emailErrorMessage = ""; // 입력이 유효한 경우 이메일 오류 메시지를 초기화합니다.
      }
    } else if (e.target.name === "password") {
      if (!passwordVal) {
        newErrorMessage = "비밀번호를 입력해 주세요";
      } else if (
        passwordVal.length < 8 ||
        !/\d/.test(passwordVal) ||
        !/[a-zA-Z]/.test(passwordVal)
      ) {
        newErrorMessage = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
      } else {
        newErrorMessage = ""; // 입력이 비어 있지 않은 경우 오류 메시지를 초기화합니다.
      }
    }
    setEmailError(emailErrorMessage);
    setErrorMessage(newErrorMessage);
    handleConfirmPasswordChange();
  };

  const handleSignup = async (userData: any) => {
    try {
      const response = await signup(userData);
      console.log(response);
      if (response) {
        localStorage.setItem("sign", response.data.data.accessToken);
        router.push("/folder");
        console.log("POST 요청이 성공했습니다.");
      }
    } catch (error) {
      console.error("로그인 실패", error);
      setErrorMessage("아이디 혹은 비밀번호가 잘못되었습니다.");
      setEmailError("아이디 혹은 비밀번호가 잘못되었습니다.");
      setIsPasswordMatch(true);
      setMatchError("아이디 혹은 비밀번호가 잘못되었습니다.");
    }
  };

  useEffect(() => {
    const LocalStorage = localStorage.getItem("sign");
    if (LocalStorage !== null) {
      router.push("/folder");
    }
  }, []);

  return (
    <S.Container>
      <S.ContentContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.LoginContainer>
            <S.LogoWrapper>
              <S.LogoImg src={"/assets/Icon/logo.svg"} alt="로고이미지" />
              <S.QsSignupWrapper>
                <S.QsSignup>이미 회원이신가요?</S.QsSignup>
                <S.LinkToSignupPage>
                  <a href="/signin">로그인 하기</a>
                </S.LinkToSignupPage>
              </S.QsSignupWrapper>
            </S.LogoWrapper>
            <S.InputContainer>
              <S.InputWrapper>
                <S.InputDescription>이메일</S.InputDescription>
                <div className={styles.container}>
                  <div
                    className={styles.input_wrapper}
                    data-iserror={hasEmailError}
                  >
                    <input
                      {...register("email")}
                      className={styles.input}
                      placeholder="이메일을 입력해 주세요"
                      type="text"
                      onBlur={handleBlurSignup}
                    />
                  </div>
                  {hasEmailError ? (
                    <small className={styles.error_message}>{emailError}</small>
                  ) : null}
                </div>
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputDescription>비밀번호</S.InputDescription>
                <div className={styles.container}>
                  <div className={styles.input_wrapper} data-iserror={hasError}>
                    <input
                      {...register("password")}
                      className={styles.input}
                      name="password"
                      placeholder="비밀번호는 영문, 숫자를 조합해 8자 이상 입력해 주세요"
                      type={passwordVisible ? "text" : "password"}
                      onBlur={handleBlurSignup}
                    />
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
                  </div>
                  {hasError ? (
                    <small className={styles.error_message}>
                      {errorMessage}
                    </small>
                  ) : null}
                </div>
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputDescription>비밀번호 확인</S.InputDescription>
                <div className={styles.container}>
                  <div
                    className={styles.input_wrapper}
                    data-iserror={hasMatchError}
                  >
                    <input
                      {...register("passwordConfirm")}
                      className={styles.input}
                      name="passwordConfirm"
                      placeholder="비밀번호와 일치하는 값을 입력해 주세요"
                      type={passwordVisible ? "text" : "password"}
                      onBlur={handleConfirmPasswordChange}
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
                  {hasMatchError ? (
                    <small className={styles.error_message}>{matchError}</small>
                  ) : null}
                </div>
              </S.InputWrapper>
              <S.SignPageButtonWrapper>
                <S.SignPageButton type="submit" value="회원가입" />
              </S.SignPageButtonWrapper>
            </S.InputContainer>
          </S.LoginContainer>
          <S.ShareContainer>
            <S.ShareText>소셜 로그인</S.ShareText>
            <S.ShareIconsContainer>
              <S.ShareIconWrapper>
                <S.ShareIcon>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.InstagramImgWrapper>
                      <S.InstagramImg
                        src={"/assets/Icon/google.png"}
                        alt="인스타그램 내부 이미지"
                      />
                    </S.InstagramImgWrapper>
                  </a>
                </S.ShareIcon>
              </S.ShareIconWrapper>
              <S.ShareIconWrapper>
                <S.ShareIcon>
                  <a
                    href="https://www.kakaocorp.com/page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.KakaoImgWrapper>
                      <S.KakaoImg
                        src={"/assets/Icon/kakaoIcon.svg"}
                        alt="카카오톡 이미지"
                      />
                    </S.KakaoImgWrapper>
                  </a>
                </S.ShareIcon>
              </S.ShareIconWrapper>
            </S.ShareIconsContainer>
          </S.ShareContainer>
        </form>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Signup;
