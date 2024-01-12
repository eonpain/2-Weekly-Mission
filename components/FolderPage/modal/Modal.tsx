import styled from "styled-components";

type ModalButtonProps = {
  $redColor?: boolean;
};

type ShareImgProps = {
  $shareApi?: string;
}

export const ModalBlur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const Container = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  z-index: 10000;
`;

export const Feature = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContentInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export const Button = styled.button<ModalButtonProps>`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 8px;
  background: ${({ $redColor }) =>
    $redColor
      ? "#FF5B56"
      : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};

  & p {
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const CloseClick = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const ShareModalContainer = styled.div`
  display: flex;
  position: relative;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
  z-index: 10000;
`;

export const FeatureNameWrapper = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  & h1 {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & p {
    color: var(--Linkbrary-gray60, #9fa6b2);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const FeatureContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const ShareImg = styled.div<ShareImgProps>`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 37.333px;
  cursor: pointer;
  background-color: ${({ $shareApi }) => {
    switch ($shareApi) {
      case "kakao":
        return "#FEE500";
      case "facebook":
        return "#1877F2";
      case "urlCopy":
        return "rgba(157, 157, 157, 0.04)";
      default:
        return "#ffffff";
    }
  }};

  & img {
    width: 18px;
    height: 18px;
  }
`;

export const ShareText = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`;

export const FolderList = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 8px;

  &:hover {
    background: #f0f6ff;
    cursor: pointer;

    & > p {
      color: #6d6afe;
    }
  }
`;

export const LinkCount = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FolderListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
