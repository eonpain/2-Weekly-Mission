import "./Folder.css";
import searchImg from "./assets/search.svg";
import carImg from "./assets/car.png";
import bullDogImg from "./assets/bulldog.png";
import buildingImg from "./assets/building.png";
import mobillImg from "./assets/mobill.png";
import chairImg from "./assets/chair.png";
import opacityImg from "./assets/불투명.png";
import bedImg from "./assets/bed.png";
import brownBullDogImg from "./assets/brownbulldog.png";
import whiteLayerImg from "./assets/whitelayer.png";
import React from "react";
import Card from './Card';

function Article() {
  return (
    <>
      <div className="articleContainer">
        <div className="searchBar">
          <img src={searchImg} alt="검색이미지" />
          <input></input>
        </div>
        <div className="articleContent">
          <div className="card">
            <img src={carImg} className="card-img-top" alt="자동차이미지" />
            <div className="card-body">
              <p className="card-text">
                <Card></Card>
              </p>
              <p className="card-text">
               <span> Some quick example text to build on the card title and make up
                the bulk of the card's content.</span><br />
                <span>2023.03.15</span>
                {/* 위 날짜에 Card컴포넌트에서 가져온 생성날짜 */}
              </p>
            </div>
          </div>
          <div className="card">
            <img src={bullDogImg} className="card-img-top" alt="불독이미지" />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={buildingImg} className="card-img-top" alt="빌딩이미지" />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        {/* </div>
        <div className="articleContent"> */}
          <div className="card">
            <img src={mobillImg} className="card-img-top" alt="모빌이미지" />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={chairImg} className="card-img-top" alt="의자이미지" />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={opacityImg}
              className="card-img-top"
              alt="불투명한이미지"
            />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        {/* </div>
        <div className="articleContent"> */}
          <div className="card">
            <img src={bedImg} className="card-img-top" alt="침대이미지" />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={brownBullDogImg}
              className="card-img-top"
              alt="갈색불독이미지"
            />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={whiteLayerImg}
              className="card-img-top"
              alt="하얀줄무늬이미지"
            />
            <div className="card-body">
              <p className="card-text">
              <Card></Card>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
