import styles from "../../styles/Shared.module.css";
import React, { useState, useEffect } from 'react';

function Header() {
  // const [profileData, setProfileData] = useState(null);

  // useEffect(() => {
  //   fetch('https://bootcamp-api.codeit.kr/api/sample/user')
  //     .then(response => response.json())
  //     .then(data => {
  //       setProfileData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching profile data:', error);
  //     });
  // }, []);
  
  return (
    <>
      <nav>
        <div className={styles.gnb}>
          <a href="/">
          <img src="/assets/Icon/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
          </a>
            <a className={`${styles.cta} ${styles["cta-short"]}`} href="/signin">
            <span>로그인</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
