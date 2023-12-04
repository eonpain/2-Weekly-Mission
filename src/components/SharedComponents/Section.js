import "./Shared.css";
import React, { useState, useEffect } from "react";

function Section() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
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
              <img
              className="userprofileimg"
                src={userData.folder.owner.profileImageSource}
                alt="유저프로필사진"
              />
            <span className="userName">{userData.folder.owner.name}</span>
            <span className="favorite">{userData.folder.name}</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Section;
