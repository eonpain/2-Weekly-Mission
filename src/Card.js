import React, { useState, useEffect } from "react";
import "./Folder.css";
import logoIcon from "./assets/logo.svg";
import nullImg from './assets/bulldog.png'
import {formatDateString,calculateElapsedTime} from './Time'

function Card({ data }) {
  const formattedDate = formatDateString(data.createdAt);
  const [imgNull, setImgNull] = useState("");
  const createdTime = calculateElapsedTime(data.createdAt);
  const [ago, setAgo] = useState("");

  useEffect(() => {
    if (data.imageSource === undefined) {
      setImgNull(nullImg);
    } else {
      setImgNull(data.imageSource);
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
    <div className={`card card${data.id}`}>
      <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">
        <div className="cardImgWrap">
          {data.imageSource === undefined ? (
            <>
              <img src={`${imgNull}`} alt={`${data.title}`} className="nullImg" />
              <img src={logoIcon} alt="logo" className="nullImg" />
            </>
          ) : (
            <img src={`${imgNull}`} alt={`${data.title}`} />
          )}
        </div>
        <div className="cardText">
          <p className="ago">{`${ago}`}</p>
          <p className="des">{`${data.description}`}</p>
          <p className="cardDate">{`${formattedDate}`}</p>
        </div>
      </a>
    </div>
  );
}
// function formatDateString(dateString) {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }
// function calculateElapsedTime(dateString) {
//   const currentDate = new Date();
//   const targetDate = new Date(dateString);

//   const timeDifference = currentDate - targetDate;
//   const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));

//   return elapsedMinutes;
// }
export default Card;

