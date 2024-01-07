import styles from "../../styles/Shared.module.css";
import React, { useState, useEffect } from 'react';

function Header() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('https://bootcamp-api.codeit.kr/api/sample/user')
      .then(response => response.json())
      .then(data => {
        setProfileData(data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);
  
  return (
    <>
      <nav>
        <div className={styles.gnb}>
          <a href="/">
          <img src="/assets/Icon/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
          </a>
         {profileData ? (
          <div className={styles.profileBox}>
            <img className={styles.userprofileimg} src={profileData.profileImageSource} alt="프로필 로고" />
            <div className={styles.profileText}>
              <span>{profileData.email}</span>
            </div>
          </div> ) : (
            <a className={`${styles.cta} ${styles["cta-short"]}`} href="/">
            <span>로그인</span>
          </a>
          )
}
        </div>
      </nav>
    </>
  );
}

export default Header;
