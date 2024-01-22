import styles from "../../styles/Shared.module.css";
import React, { useState, useEffect } from "react";

function Section({folderData, userData}) {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // }, []);

  return (
    <>
      <div className={styles.sectionContainer}>
        {userData ? (
          <div className={styles.sectionContent}>
              <img
              className={styles.userprofileimg}
                src={userData.profileImage}
                alt="유저프로필사진"
              />
            <span className={styles.userName}>{userData.ownerName}</span>
            <span className={styles.favorite}>{folderData.name}</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Section;
