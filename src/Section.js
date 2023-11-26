import "./Folder.css";
import React, { useState, useEffect } from "react";
// import userimg from './assets/userimg.svg'

function Section() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 프로필 데이터를 가져오는 API 호출
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        // API에서 받아온 데이터를 상태에 저장
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <div className="sectionContainer">
        {userData ? (
          <div className="sectionContent">
            <div className="userImg">
              <img
                src={userData.folder.owner.profileImageSource}
                alt="유저프로필사진"
              />
            </div>
            <span className="userName">{userData.folder.owner.name}</span>
            <span className="favorite">{userData.folder.name}</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Section;
