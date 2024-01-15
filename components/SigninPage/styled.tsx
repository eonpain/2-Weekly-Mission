import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 144rem;
  padding: 23.8rem 0px 25.3rem 0px;
  justify-content: center;
  align-items: center;
  background: var(--Linkbrary-bg, #f0f6ff);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  align-items: center;
  gap: 3.2rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3.2rem;
  gap: 3rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const LogoImg = styled.img`
  width: 21.583rem;
  height: 3.8rem;
`;

export const QsSignupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.8rem;
`;

export const QsSignup = styled.span`
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const LinkToSignupPage = styled.span`
  display: inline-block;
  border-bottom: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  color: var(--Linkbrary-primary-color, #6d6afe);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 2.4rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.2rem;
`;

export const InputDescription = styled.label`
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SignPageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.6rem;
`;

export const SignPageButton = styled.input`
  display: flex;
  width: 100%;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: none;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export const ShareContainer = styled.div`
  display: flex;
  width: 40rem;
  padding: 1.2rem 2.4rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-gray10, #e7effb);
`;

export const ShareText = styled.span`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ShareIconsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const ShareIconWrapper = styled.div`
  width: 4.2rem;
  height: 4.2rem;
`;

export const ShareIcon = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  flex-shrink: 0;
`;

export const InstagramImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  background-image: url("/assets/Icon/googleBg.svg");
`;

export const InstagramImg = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  flex-shrink: 0;
  background: url(<path-to-image>), lightgray 0px 0px / 100% 100% no-repeat;
`;

export const KakaoImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  background-image: url("/assets/Icon/kakaoBg.svg");
`;

export const KakaoImg = styled.img`
  width: 2.6rem;
  height: 2.4rem;
  flex-shrink: 0;
`;
