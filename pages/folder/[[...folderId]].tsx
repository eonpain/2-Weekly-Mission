import React, { useState, useEffect, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import axiosInstance from "@/lib/axios";
import Header from "@/components/FolderPage/Header";
import Footer from "@/components/FolderPage/Footer";
import Section from "@/components/FolderPage/Section";
import SortMenu from "@/components/FolderPage/UserSortMenu";
import Card from "@/components/FolderPage/Card";
import Search from "@/pages/folder/search/[search]";
import * as S from "@/components/FolderPage/Styled";
import { showAll, userFolders } from "@/pages/folder/folder.api.ts";
import { useFoldLink } from "@/components/FolderPage/hooks/useFolder";
import {
  ChangeNameModal,
  DeleteFolder,
  ShareModal,
} from "@/components/FolderPage/modal/index";
import { FolderData, LinkData } from "@/pages/folder/type";
import { getUser, getFolder } from "@/pages/shared/[folderId]/shared.api.ts";
import { contextUserId } from "@/pages/_app";

function Folder() {
  const [selectSortName, setSelectSortName] = useState<number>(0);
  const [foldLinkTitle, setFoldLinkTitle] = useState<string>("전체");
  const [sortData, setSortData] = useState<FolderData[]>([]);
  const [linkData, setLinkData] = useState<LinkData[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [folder, setFolder] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { folderId } = router.query;

  const userProfileId = useContext<any>(contextUserId);

  const clickSortName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = Number(event.currentTarget.value);
    setSelectSortName(value);
    setFoldLinkTitle(event.currentTarget.title);

      // URL 쿼리 파라미터 업데이트 (브라우저 히스토리를 직접 조작)
      const newUrl = value === 0 ? `/folder` : `/folder/${value}`;
      window.history.pushState({}, "", newUrl);
  };
  
  useEffect(() => {
    if (router.isReady) {
      const queryId = router.query.id;
      if (queryId) {
        const numTypeQueryId = Number(queryId);
        if (!isNaN(numTypeQueryId)) {
          setSelectSortName(numTypeQueryId);
        }
      }
    }
  }, [router.isReady, router.query.id]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken === null) {
      router.push("/signin");
    } else {
      router.replace("/folder");
    }
  }, []);

  useEffect(() => {
    if (folderId) {
      setSelectSortName(Number(folderId));
    }
  }, [folderId]);

 async function fetchFolderData(userId: number){
    try {
      const url = `users/${userId}/folders`;
      const response = await axiosInstance.get(url);
      setSortData(response.data.data);
    } catch (error) {
      console.error('Error fetching folder data:', error);
      throw error;
    }
  }

useEffect(()=>{
  if(userProfileId){
    showAll(userProfileId);
    fetchFolderData(userProfileId);
    userFolders(userProfileId);
  }
},[userProfileId]);

  const handleModalClick = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  const isSorted = foldLinkTitle !== "전체";

  const FolderHeaderStyle = createGlobalStyle`
  .Header {
    position: static;
  }
`;
useFoldLink(selectSortName, userProfileId);
const foldLink = useFoldLink(selectSortName, userProfileId);

  return (
    <>
          <FolderHeaderStyle />
      {/* <Header userData={user} /> */}
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
      {/* <Footer /> */}
    </>
  );
}

export default Folder;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}