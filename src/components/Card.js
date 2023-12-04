import React, { useState, useEffect } from "react";
import logoIcon from "../Image/logo.svg";
import nullImg from "../Image/bulldog.png";
import StarImg from '../Image/star.svg';
import KebabImg from '../Image/kebab.svg';
import { formatDateString, calculateElapsedTime } from "./Time";
import * as S from "./Styled";

function Card({ data }) {
  const formattedDate = formatDateString(data.created_at);
  const [imgNull, setImgNull] = useState("");
  const createdTime = calculateElapsedTime(data.created_at);
  const [kebabBool, setKebabBool] = useState(false);
  const [ago, setAgo] = useState("");

  const handleKebabClick = (e) => {
    setKebabBool((prevBool) => !prevBool);
  };

  useEffect(() => {
    if (data.image_source == undefined) {
      setImgNull(nullImg);
    } else {
      setImgNull(data.image_source);
    }
  }, [imgNull]);

  useEffect(() => {
    if (createdTime < 2) {
      setAgo("1 minute ago");
    } else if (createdTime <= 59) {
      setAgo(`${createdTime} minutes ago`);
    } else if (createdTime / 60 <= 23) {
      setAgo(`${Math.ceil(createdTime / 60)} hour ago`);
    } else if (createdTime / 60 >= 24 && createdTime / 60 / 24 < 2) {
      setAgo(`1 day ago`);
    } else if (createdTime / 60 / 24 >= 2 && createdTime / 60 / 24 <= 30) {
      setAgo(`${Math.ceil(createdTime / 60 / 24)} days ago`);
    } else if (createdTime / 60 / 24 > 30 && createdTime / 60 / 24 <= 60) {
      setAgo(`1 month ago`);
    } else if (createdTime / 60 / 24 > 60 && createdTime / 60 / 24 <= 365) {
      setAgo(`${Math.ceil(createdTime / 60 / 24 / 30)} months ago`);
    } else if (createdTime / 60 / 24 > 365 && createdTime / 60 / 24 <= 730) {
      setAgo(`1 year ago`);
    } else {
      setAgo(`${Math.ceil(createdTime / 60 / 24 / 365)} years ago`);
    }
  }, [createdTime]);

  return (
    <S.Card>
      <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">
        <S.CardImgWrap>
          {data.image_source === undefined ? (
            <>
              <S.NullImg src={`${imgNull}`} alt={`${data.title}`}></S.NullImg>
              <S.NullImg src={logoIcon} alt="logo"></S.NullImg>
            </>
          ) : (
            <S.CardImg src={`${imgNull}`} alt={`${data.title}`}></S.CardImg>
          )}
        </S.CardImgWrap>
        </a>
        <S.Star src={StarImg} alt="별 이미지" />
        <S.CardText className="cardText">
          <S.KebabAgoBox>
          <S.Ago>{`${ago}`}</S.Ago>
          <S.Kebab onClick={handleKebabClick}><img src={KebabImg} alt="케밥 이미지" /></S.Kebab>
          {kebabBool ? (
          <S.KebabSelect>
<S.kebabOption>삭제하기</S.kebabOption>
<S.kebabOption>폴더에 추가</S.kebabOption>
          </S.KebabSelect>
          ) : (<></>)}
          </S.KebabAgoBox>
          <S.Des>{`${data.description}`}</S.Des>
          <S.CardDate>{`${formattedDate}`}</S.CardDate>
        </S.CardText>
    </S.Card>
  );
}

export default Card;
