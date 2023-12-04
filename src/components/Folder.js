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
import { ShowAll } from "./Api";
import { useFoldLink, useLink } from "./Hook";


function Folder() {
  const [selectList, setSelectList] = useState(0);
  const [foldLinkTitle, setFoldLinkTitle] = useState("전체");
  const [sortData, setSortData] = useState([]);
  // const [cardUser, setCardUser] = useState();
  const [foldLink, setFoldLink] = useState([]);
  const [foldLinkMock, setFoldLinkMock] = useState([]);

  const clickList = (e) => {
    setSelectList(Number(e.target.value));
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

  useFoldLink(selectList, foldLinkMock, setFoldLink);
  useLink(foldLin);


  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1/folders")
      .then((response) => response.json())
      .then((result) => result.data)
      .then((folddata) => setSortData(folddata))
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);
  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((result) => result.folder.links)
      .then((carddata) => setCardUser(carddata))
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);
  return (
    <>
      <Header />
      <Section />
      <Search />
      <SortMenu data={sortData} selectList={selectList} clickList={clickList} />
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
      {/* <S.CardBox>
        {cardUser && cardUser.map((data) => <Card key={data.id} data={data} />)}
      </S.CardBox> */}
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
