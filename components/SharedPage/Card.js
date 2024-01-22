import React, { useState, useEffect } from "react";
import styles from "../../styles/Shared.module.css";
import Link from "next/link";
import { formatDateString, calculateElapsedTime } from "./Time";

function Card({ data }) {
  const formattedDate = formatDateString(data.createdAt);
  const [imgNull, setImgNull] = useState("");
  const createdTime = calculateElapsedTime(data.createdAt);
  const [ago, setAgo] = useState("");

  useEffect(() => {
    if (data.imageSource === undefined) {
      setImgNull("/assets/Image/bulldog.png");
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
    <div className={`${styles.card} ${styles.card['data.id']}`}>
      <Link href={data.url} passHref>
        <span target="_blank" rel="noopener noreferrer">
          {" "}
          <div className={styles.cardImgWrap}>
            {data.imageSource === undefined ? (
              <>
                <img src={'/assets/Icon/logo.svg'} alt="logo" className={styles.nullImg} />
              </>
            ) : (
              <img src={`${imgNull}`} alt={`${data.title}`} />
            )}
          </div>
          <div className={styles.cardText}>
            <p className={styles.ago}>{`${ago}`}</p>
            <p className={styles.des}>{`${data.description}`}</p>
            <p className={styles.cardDate}>{`${formattedDate}`}</p>
          </div>
        </span>
      </Link>
    </div>
  );
}

export default Card;
