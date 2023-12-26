import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import SortMenu from "./SortMenu";
import Card from "./Card";
import { useEffect, useState } from "react";
import Search from "./Search";
import * as S from "./Styled";
import "../indexCss.css";
import shareImg from "../Image/share.svg";
import penImg from "../Image/pen.svg";
import deleteImg from "../Image/delete.svg";
import { ShowAll, ShowFolders, FetchFolderData } from "../Api";
import { useFoldLink, useLink } from "./Hook";

function Folder() {
  const [selectSortName, setselectSortName] = useState(0);
  const [foldLinkTitle, setFoldLinkTitle] = useState("전체");
  const [sortData, setSortData] = useState([]);
  const [foldLink, setFoldLink] = useState([]);
  const [foldLinkMock, setFoldLinkMock] = useState([]);

  const clickSortName = (e) => {
    setselectSortName(Number(e.target.value));
    setFoldLinkTitle(e.target.title);
  };
  const foldLin = async () => {
    try {
      const result = await ShowAll();
      setFoldLinkMock(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFoldLink(selectSortName, foldLinkMock, setFoldLink);
  useLink(foldLin);

  useEffect(() => {
    async function fetchData() {
      try {
        const folderData = await FetchFolderData();
        setSortData(folderData);
      } catch (error) {
        console.error("Error fetching folder data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const folderLinks = await ShowFolders();
        setCardUser(folderLinks);
      } catch (error) {
        console.error("Error fetching folder links:", error);
      }
    }

    fetchData();
  }, []);
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
          <S.SortEdit>
            <S.SortEditContent>
              <img src={shareImg} alt={shareImg} />
              <p>공유</p>
            </S.SortEditContent>
            <S.SortEditContent>
              <img src={penImg} alt={penImg} />
              <p>이름 변경</p>
            </S.SortEditContent>
            <S.SortEditContent>
              <img src={deleteImg} alt={deleteImg} />
              <p>삭제</p>
            </S.SortEditContent>
          </S.SortEdit>
        )}
      </S.CardTitle>
      {foldLink.length > 0 ? (
        <S.CardBox>
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </S.CardBox>
      ) : (
        <S.NoData>저장된 링크가 없습니다.</S.NoData>
      )}
      <Footer></Footer>
    </>
  );
}

export default Folder;
