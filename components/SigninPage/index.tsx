import { ComponentPropsWithRef, useState, FocusEvent, useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as S from "./styled";
import axiosInstance from "@/lib/axios";
import { useInput } from "../FolderPage/hooks/useInput";
import styles from "./input.module.css";
import Icon from "@/components/common/Icon";
import { signin } from "@/pages/signin/signin.api.ts";
import { contextUserId } from "@/pages/_app";

interface InputType {
  email: string;
  password: string;
}

function Signin() {
  const [errorMessage, setErrorMessage] = useState<string | boolean>("");
  const [emailError, setEmailError] = useState<string | boolean>("");
  const { handleClickPasswordToggle, passwordVisible } = useInput();
  const hasError = !!errorMessage;
  const hasEmailError = !!emailError;

  const { register, handleSubmit, watch } = useForm<InputType>();
  const onSubmit: SubmitHandler<InputType> = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    handleSignin(userData);
  };

  const ContextUserId = useContext(contextUserId);
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) {
      router.push(`/folder/${ContextUserId}`);
    }
  }, []);

  const emailVal = watch("email");
  const passwordVal = watch("password");

  const handleBlurSignin = (e: React.FocusEvent<HTMLInputElement>) => {
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
  };

  const handleSignin = async (userData: any) => {
    try {
      const response = await signin(userData);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
          router.push(`/folder/${ContextUserId}`);
        }
    } catch (error) {
      console.error("로그인 실패", error);
      setErrorMessage("아이디 혹은 비밀번호가 잘못되었습니다.");
      setEmailError("아이디 혹은 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <S.Container>
      <S.ContentContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.LoginContainer>
            <S.LogoWrapper>
              <S.LogoImg src={"/assets/Icon/logo.svg"} alt="로고이미지" />
              <S.QsSignupWrapper>
                <S.QsSignup>회원이 아니신가요?</S.QsSignup>
                <S.LinkToSignupPage>
                  <a href="/signup">회원 가입하기</a>
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
                      onBlur={handleBlurSignin}
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
                      placeholder="비밀번호를 입력해 주세요"
                      type={passwordVisible ? "text" : "password"}
                      onBlur={handleBlurSignin}
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
              <S.SignPageButtonWrapper>
                <S.SignPageButton type="submit" value="로그인" />
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

export default Signin;
