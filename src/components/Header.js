import logoIcon from "../Image/logo.svg";
import React, { useState, useEffect } from "react";
import * as S from "./Styled";

function Header() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1")
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  return (
    <>
      <S.Nav>
        <S.Gnd>
          <a href="/">
            <img src={logoIcon} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          {profileData && (
            <S.ProfileBox>
              <S.ProfileBoxImg
                src={profileData?.data[0].image_source}
                alt="프로필 로고"
              />
              <S.ProfileText>
                <span>{profileData?.data[0].email || ""}</span>
              </S.ProfileText>
            </S.ProfileBox>
          )}
        </S.Gnd>
      </S.Nav>
    </>
  );
}

export default Header;
