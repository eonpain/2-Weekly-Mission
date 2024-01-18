import React, { useState, useEffect, MouseEventHandler } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import SortMenu from "./SortMenu";
import Card from "./Card";
import Search from "../../pages/folder/search/[search]";
import * as S from "./Styled";
import { showAll, fetchFolderData } from "../../pages/folder/folder.api.ts";
import { useFoldLink } from "./hooks/useFolder";
import { ChangeNameModal, DeleteFolder, ShareModal } from "./modal/index";
import { FolderData, LinkData } from "../../pages/folder/type";

function Folder() {
  const [selectSortName, setSelectSortName] = useState<number>(0);
  const [foldLinkTitle, setFoldLinkTitle] = useState<string>("전체");
  const [sortData, setSortData] = useState<FolderData[]>([]);
  const [linkData, setLinkData] = useState<LinkData[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const clickSortName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = Number(event.currentTarget.value);
    setSelectSortName(value);
    setFoldLinkTitle(event.currentTarget.title);
  };

  const fetchData = async () => {
    const userId = 1;
    try {
      const folderData: FolderData[] = await fetchFolderData(userId);
      setSortData(folderData);

      const linkData: LinkData[] = await showAll(userId);
      setLinkData(linkData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFoldLink(selectSortName);

  const foldLink = useFoldLink(selectSortName);

  const handleModalClick = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  const isSorted = foldLinkTitle !== "전체";

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
        {isSorted && (
          <S.SortEdit>
            <S.SortEditContent onClick={() => handleModalClick("ShareModal")}>
              <img src={"/assets/Icon/share.svg"} alt="shareImg" />
              <p>공유</p>
            </S.SortEditContent>

            <S.SortEditContent
              onClick={() => handleModalClick("ChangeNameModal")}
            >
              <img src={"/assets/Icon/pen.svg"} alt="RenameImg" />
              <p>이름 변경</p>
            </S.SortEditContent>

            <S.SortEditContent
              onClick={() => handleModalClick("DeleteFolderModal")}
            >
              <img src={"/assets/Icon/delete.svg"} alt="DeleteImg" />
              <p>삭제</p>
            </S.SortEditContent>
          </S.SortEdit>
        )}
        {modalOpen && modalContent === "ShareModal" && (
          <ShareModal onClose={handleCloseModal} />
        )}
        {modalOpen && modalContent === "ChangeNameModal" && (
          <ChangeNameModal onClose={handleCloseModal} />
        )}
        {modalOpen && modalContent === "DeleteFolderModal" && (
          <DeleteFolder onClose={handleCloseModal} />
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
