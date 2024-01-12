import React, { useState, useEffect } from "react";
import { formatDateString, calculateElapsedTime } from "./Time";
import * as S from "./Styled";
import { DeleteLink, AddToFolderModal } from "./modal";
import { LinkData } from "../../pages/folder/type";
import { StaticImageData } from 'next/image';


function Card({ data }: { data: LinkData }) {
  const formattedDate = formatDateString(data.created_at);
  const [imgNull, setImgNull] = useState<StaticImageData | string>('');
  const createdTime = calculateElapsedTime(data.created_at);
  const [kebabBool, setKebabBool] = useState(false);
  const [ago, setAgo] = useState("");
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleKebabClick = () => {
    setKebabBool((prevBool) => !prevBool);
  };

  const setImageNull = () => {
    if (data.image_source == undefined) {
      setImgNull("/assets/Image/bulldog.png");
    } else {
      setImgNull(data.image_source);
    }
  };

  const calculateAgo = (createdTime: number) => {
    if (createdTime < 2) {
      return "1 minute ago";
    } else if (createdTime <= 59) {
      return `${createdTime} minutes ago`;
    } else if (createdTime / 60 <= 23) {
      return `${Math.ceil(createdTime / 60)} hour ago`;
    } else if (createdTime / 60 >= 24 && createdTime / 60 / 24 < 2) {
      return `1 day ago`;
    } else if (createdTime / 60 / 24 >= 2 && createdTime / 60 / 24 <= 30) {
      return `${Math.ceil(createdTime / 60 / 24)} days ago`;
    } else if (createdTime / 60 / 24 > 30 && createdTime / 60 / 24 <= 60) {
      return `1 month ago`;
    } else if (createdTime / 60 / 24 > 60 && createdTime / 60 / 24 <= 365) {
      return `${Math.ceil(createdTime / 60 / 24 / 30)} months ago`;
    } else if (createdTime / 60 / 24 > 365 && createdTime / 60 / 24 <= 730) {
      return `1 year ago`;
    } else {
      return `${Math.ceil(createdTime / 60 / 24 / 365)} years ago`;
    }
  };

  useEffect(setImageNull, [data.image_source]);
  useEffect(() => {
    const ago = calculateAgo(createdTime);
    setAgo(ago);
  }, [createdTime]);

  const handleDeleteClick = () => {
    setModalContent("DeleteLinkModal");
    setModalOpen(true);
  };

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
      <S.Card>
        <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">
          <S.CardImgWrap>
            {data.image_source === undefined ? (
              <>
                  <S.NullImg src={`${imgNull}`} alt={`${data.title}`} />
                  <S.NullImg src={'/assets/Icon/logo.svg'} alt="logo" />
              </>
            ) : (
                <S.CardImg src={`${imgNull}`} alt={`${data.title}`} />
            )}
          </S.CardImgWrap>
        </a>
        <S.Star src={'/assets/Icon/star.svg'} alt="별 이미지" />
        <S.CardText className="cardText">
          <S.KebabAgoBox>
            <S.Ago>{`${ago}`}</S.Ago>
            <S.Kebab onClick={handleKebabClick}>
              <img src={'/assets/Icon/kebab.svg'} alt="케밥 이미지" />
            </S.Kebab>
            {kebabBool && (
              <S.KebabSelect>
                <S.kebabOption onClick={handleDeleteClick}>
                  삭제하기
                </S.kebabOption>
                <S.kebabOption onClick={handleAddToFolderClick}>
                  폴더에 추가
                </S.kebabOption>
              </S.KebabSelect>
            )}
          </S.KebabAgoBox>
          <S.Des>{`${data.description}`}</S.Des>
          <S.CardDate>{`${formattedDate}`}</S.CardDate>
        </S.CardText>
      </S.Card>
      {modalOpen && modalContent === "DeleteLinkModal" && (
        <DeleteLink onClose={handleCloseModal} />
      )}
      {modalOpen && modalContent === "AddToFolderModal" && (
        <AddToFolderModal onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Card;
