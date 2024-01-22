import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/FolderPage/Header";
import Footer from "@/components/FolderPage/Footer";
import Section from "@/components/FolderPage/Section";
import SortMenu from "@/components/FolderPage/UserSortMenu";
import Card from "@/components/FolderPage/Card";
import Search from "@/pages/folder/search/[search]";
import * as S from "@/components/FolderPage/Styled";
import { showAll, fetchFolderData } from "@/pages/folder/folder.api.ts";
import { useFoldLink } from "@/components/FolderPage/hooks/useFolder";
import {
  ChangeNameModal,
  DeleteFolder,
  ShareModal,
} from "@/components/FolderPage/modal/index";
import { FolderData, LinkData } from "@/pages/folder/type";
import { getUser, getFolder } from "@/pages/shared/[folderId]/shared.api.ts";

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

  const foldLink = useFoldLink(selectSortName, folder?.userId);
  const clickSortName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = Number(event.currentTarget.value);
    setSelectSortName(value);
    setFoldLinkTitle(event.currentTarget.title);
  };

  // useEffect(()=>{
  //   if(router.isReady){
  //     const currentFolder = router.query['folderId']
  //     ? Number(router.query['folderId'][0])
  //     : 'all';

  //     setSelectedFolderId(currentFolder);
  //   }
  // },[router.isReady, router.query]);

  const loadFolderLinkData = async () => {
    try {
      const folderData: FolderData[] = await fetchFolderData(folder.userId);
      const linkData: LinkData[] = await showAll(folder.userId);
      setLinkData(linkData);
      setSortData(folderData);
      setLoading(false); // 데이터를 가져온 후 로딩 상태를 false로 설정
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // 데이터를 가져온 후 로딩 상태를 false로 설정
    }
  };

  useEffect(() => {
    loadFolderLinkData();
  }, [folder]);

    const fetchData = async () => {
      try {
        if (folderId) {
          const folderData = await getFolder(folderId as string);
          const userData = await getUser(folderData.userId);
          setFolder(folderData);
          setUser(userData);
        }
      } catch (error) {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다:", error);
      }
    };

    useEffect(() => {
      if (folderId) {
        fetchData();
      }
    }, [folderId]);

    // useEffect(() => {
    //   const accessToken = localStorage.getItem("accessToken");
    //   if (!accessToken) {
    //     router.replace("/signin");
    //   } else {
    //   }
    // }, []);

  const handleModalClick = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  // useEffect(()=> {
  //   onSigninUserData();
  // },[])
  

  const isSorted = foldLinkTitle !== "전체";

  return (
    <>
      <Header userData={user} />
      <Section />
      <Search />
      {folder && !loading && sortData && (
        <SortMenu
          data={sortData}
          selectSortName={selectSortName}
          clickSortName={clickSortName}
        />
      )}
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