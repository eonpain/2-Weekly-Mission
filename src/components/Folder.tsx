import React, { useState, useEffect, MouseEventHandler } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import SortMenu from "./SortMenu";
import Card from "./Card";
import Search from "./Search";
import * as S from "./Styled";
import { ShowFolders, FetchFolderData } from "../utils/Api";
import { useFoldLink } from "./Hook";
import { ChangeNameModal, DeleteFolder, ShareModal } from "./modal/index";
import shareImg from "../Image/share.svg";
import penImg from "../Image/pen.svg";
import deleteImg from "../Image/delete.svg";
import { FolderData } from "../utils/type";

function Folder() {
  const [selectSortName, setSelectSortName] = useState<number>(0);
  const [foldLinkTitle, setFoldLinkTitle] = useState<string>("전체");
  const [sortData, setSortData] = useState<FolderData[]>([]);
  const [foldLinkMock, setFoldLinkMock] = useState([]);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const clickSortName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setSelectSortName(Number(event.currentTarget.value));
    setFoldLinkTitle(event.currentTarget.title);
  };

  const fetchFolderData = async () => {
    try {
      const folderData: FolderData[] = await FetchFolderData();
      setSortData(folderData);
    } catch (error) {
      console.error("Error fetching folder data:", error);
    }
  };

  // const fetchFolders = async () => {
  //   try {
  //     const result = await ShowFolders();
  //     setFoldLinkMock(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useFoldLink(selectSortName, foldLinkMock);
  const foldLink = useFoldLink(selectSortName, foldLinkMock);

  // useLink(fetchFolders);

  useEffect(() => {
    fetchFolderData();
  }, []);

  // useEffect(() => {
  //   fetchFolders();
  // }, []);

  const handleShareClick = () => {
    setModalContent("ShareModal");
    setModalOpen(true);
  };

  const handleRenameClick = () => {
    setModalContent("ChangeNameModal");
    setModalOpen(true);
  };

  const handleDeleteClick = () => {
    setModalContent("DeleteFolderModal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Section />
      <Search />
      <SortMenu
        data={sortData}
        selectSortName={selectSortName}
        clickSortName={clickSortName}
      />
      <S.CardTitle>
        <S.CardTitleText>{foldLinkTitle}</S.CardTitleText>
        {foldLinkTitle === "전체" ? (
          <></>
        ) : (
          <>
            <S.SortEdit>
              <S.SortEditContent onClick={handleShareClick}>
                <img src={shareImg} alt={shareImg} />
                <p>공유</p>
              </S.SortEditContent>
              <S.SortEditContent onClick={handleRenameClick}>
                <img src={penImg} alt={penImg} />
                <p>이름 변경</p>
              </S.SortEditContent>
              <S.SortEditContent onClick={handleDeleteClick}>
                <img src={deleteImg} alt={deleteImg} />
                <p>삭제</p>
              </S.SortEditContent>
            </S.SortEdit>
            {modalOpen && modalContent === "ShareModal" && (
              <ShareModal onClose={handleCloseModal} />
            )}
            {modalOpen && modalContent === "ChangeNameModal" && (
              <ChangeNameModal onClose={handleCloseModal} />
            )}
            {modalOpen && modalContent === "DeleteFolderModal" && (
              <DeleteFolder onClose={handleCloseModal} />
            )}
          </>
        )}
      </S.CardTitle>
      {foldLink && foldLink.length > 0 ? (
        <S.CardBox>
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </S.CardBox>
      ) : (
        <S.NoData>저장된 링크가 없습니다.</S.NoData>
      )}
      <Footer />
    </>
  );
}

export default Folder;
