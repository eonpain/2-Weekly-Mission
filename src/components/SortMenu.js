import { useState } from "react";
import * as S from "./Styled";
import "../indexCss.css";
import sortPlusImg from "../Image/add.svg";
import { AddFolderModal } from "../components/modal/index";

function SortMenu({ data, clickSortName, selectSortName }) {
  const [modalContent, setModalContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFolderAdd = () => {
    setModalContent("AddFolderModal");
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  return (
    <>
      <S.SortContainer>
        <div>
          <S.SortBox>
            <S.SortButton
              value=""
              title="전체"
              onClick={clickSortName}
              $isSelected={selectSortName === 0}
            >
              전체
            </S.SortButton>
            {data &&
              data.map((item) => (
                <S.SortButton
                  key={item.id}
                  $isSelected={selectSortName === item.id}
                  value={item.id}
                  title={item.name}
                  onClick={clickSortName}
                  style={{
                    backgroundColor:
                      selectSortName === item.id ? "#6D6AFE" : "#fff",
                    color: selectSortName === item.id ? "#fff" : "black",
                  }}
                >
                  {item.name}
                </S.SortButton>
              ))}
          </S.SortBox>
        </div>
        <div>
          <S.SortInput></S.SortInput>
          <S.SortPlusImg
            src={sortPlusImg}
            onClick={handleFolderAdd}
          ></S.SortPlusImg>
        </div>
      </S.SortContainer>
      {modalOpen && modalContent === "AddFolderModal" && (
        <AddFolderModal onClose={handleCloseModal} />
      )}
    </>
  );
}

export default SortMenu;
