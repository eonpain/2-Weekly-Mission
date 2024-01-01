import { useState, useEffect } from "react";
import * as S from "./Modal";
import kakaoImg from "../../Image/kakao.svg";
import facebookImg from "../../Image/facebookBlue.svg";
import urlLinkImg from "../../Image/link.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}
type OnCloseFunction = () => void;

export function ChangeNameModal({ onClose }: { onClose: OnCloseFunction }) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <S.ModalBlur>
      <S.Container>
        <S.CloseClick onClick={handleCloseModal} />
        <S.Feature>이름 변경하기</S.Feature>
        <S.ContentInput />
        <S.Button>
          <p>변경하기</p>
        </S.Button>
      </S.Container>
    </S.ModalBlur>
  );
}

export function AddFolderModal({ onClose }: { onClose: OnCloseFunction }) {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <S.ModalBlur>
      <S.Container>
        <S.CloseClick onClick={handleCloseModal} />
        <S.Feature>폴더 추가</S.Feature>
        <S.ContentInput />
        <S.Button>
          <p>추가하기</p>
        </S.Button>
      </S.Container>
    </S.ModalBlur>
  );
}

export function ShareModal({ onClose }: { onClose: OnCloseFunction }) {
  const handleCloseModal = () => {
    onClose();
  };
  
  const host = window.location.host;
  const userId = 1;
  const folderId = 1;
  const shareUrl = `https://${host}/shared?user=${userId}&folder=${folderId}`;

  const shareToKaKao = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK not initialized");
      return;
    }

    window.Kakao.init(process.env.KAKAO_KEY);

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkabrary",
        description: "세상의 모든 링크를 저장하세요.",
        imageUrl: "",
        link: {
          mobileWebUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "보러 가기",
          link: {
            mobileWebUrl: shareUrl,
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => alert("링크가 복사되었습니다."));
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.KAKAO_KEY);
    }
  }, []);

  return (
    <S.ModalBlur>
      <S.ShareModalContainer>
        <S.CloseClick onClick={handleCloseModal} />
        <S.FeatureNameWrapper>
          <h1>폴더 공유</h1>
          <p>폴더명</p>
        </S.FeatureNameWrapper>
        <S.FeatureContentWrapper>
          <S.FeatureContent>
            <S.ShareImg $shareApi="kakao" onClick={shareToKaKao}>
              <img src={kakaoImg} alt="카카오톡" />
            </S.ShareImg>
            <S.ShareText>카카오톡</S.ShareText>
          </S.FeatureContent>
          <S.FeatureContent>
            <S.ShareImg $shareApi="facebook" onClick={shareToFacebook}>
              <img src={facebookImg} alt="페이스북" />
            </S.ShareImg>
            <S.ShareText>페이스북</S.ShareText>
          </S.FeatureContent>
          <S.FeatureContent>
            <S.ShareImg $shareApi="urlCopy" onClick={copyLinkToClipboard}>
              <img src={urlLinkImg} alt="url링크" />
            </S.ShareImg>
            <S.ShareText>링크 복사</S.ShareText>
          </S.FeatureContent>
        </S.FeatureContentWrapper>
      </S.ShareModalContainer>
    </S.ModalBlur>
  );
}

export function DeleteFolder({ onClose }: { onClose: OnCloseFunction }) {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <S.ModalBlur>
      <S.Container>
        <S.CloseClick onClick={handleCloseModal} />
        <S.FeatureNameWrapper>
          <h1>폴더 삭제</h1>
          <p>폴더명</p>
        </S.FeatureNameWrapper>
        <S.Button $redColor>
          <p>삭제하기</p>
        </S.Button>
      </S.Container>
    </S.ModalBlur>
  );
}

export function DeleteLink({ onClose }: { onClose: OnCloseFunction }) {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <S.ModalBlur>
      <S.Container>
        <S.CloseClick onClick={handleCloseModal} />
        <S.FeatureNameWrapper>
          <h1>링크 삭제</h1>
          <p>https://www.abc.com</p>
        </S.FeatureNameWrapper>
        <S.Button $redColor>
          <p>삭제하기</p>
        </S.Button>
      </S.Container>
    </S.ModalBlur>
  );
}

export function AddToFolderModal({ onClose }: { onClose: OnCloseFunction }) {
  const handleCloseModal = () => {
    onClose();
  };
  const [selected, setSelected] = useState<string | null>(null);
  const handleSelected = (link: string) => {
    setSelected(link);
  };
  return (
    <S.ModalBlur>
      <S.Container>
        <S.CloseClick onClick={handleCloseModal} />
        <S.FeatureNameWrapper>
          <h1>폴더에 추가</h1>
          <p>링크 주소</p>
        </S.FeatureNameWrapper>
        <S.FolderListWrapper>
          {["코딩팁", "채용 사이트", "유용한 글", "나만의 장소"].map(
            (link, index) => (
              <S.FolderList
                key={index}
                // selected={selected === link}
                onClick={() => handleSelected(link)}
              >
                <p>{link}</p> <S.LinkCount>7개 링크</S.LinkCount>
              </S.FolderList>
            )
          )}
        </S.FolderListWrapper>
        <S.Button>
          <p>추가하기</p>
        </S.Button>
      </S.Container>
    </S.ModalBlur>
  );
}
