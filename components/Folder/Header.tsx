import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { ProfileApi } from "../../pages/folder/[id]";
import { ProfileData } from "../../pages/folder/type";

function Header() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const fetchProfileData = async () => {
    try {
      const userData: ProfileData = await ProfileApi();
      setProfileData(userData);
    } catch (error) {
      console.error("Error fetching folder data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <>
      <S.Nav>
        <S.Gnd>
          <a href="/">
            <img src={'/assets/Icon/logo.svg'} alt="홈으로 연결된 Linkbrary 로고" />
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
