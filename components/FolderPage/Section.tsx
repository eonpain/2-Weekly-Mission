import React, { useState } from "react";
import * as S from "./Styled";
import { AddToFolderModal } from "./modal";

function Section() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToFolderClick = () => {
    setModalContent("AddToFolderModal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };
  return (
    <>
      <S.SectionContainer>
        <S.SectionContent>
          <S.LinkInputBox>
            <S.LinkImg>
              <img src={'/assets/Icon/link.svg'} alt="링크이미지" />
            </S.LinkImg>
            <S.SectionInput placeholder="링크를 추가해보세요"></S.SectionInput>
          </S.LinkInputBox>

          <S.LinkAddButton>
            <S.LinkAddText onClick={handleAddToFolderClick}>
              추가하기
            </S.LinkAddText>
          </S.LinkAddButton>
        </S.SectionContent>
      </S.SectionContainer>
      {modalOpen && modalContent === "AddToFolderModal" && (
        <AddToFolderModal onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Section;
