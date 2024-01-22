import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { profileApi } from "../../pages/folder/folder.api.ts";
import { ProfileData } from "../../pages/folder/type";
import LogoutButton from "./LogoutButton";

function Header({userData}: any) {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const fetchProfileData = async () => {
    const userId = 1;
    try {
      const userData: ProfileData = await profileApi(userId);
      setProfileData(userData);
    } catch (error) {
      console.error("Error fetching folder data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        userData = !!accessToken;
    } 
  }, []);
  
  return (
    <>
      <S.Nav>
        <S.Gnd>
          <a href="/">
            <img
              src={"/assets/Icon/logo.svg"}
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
          {userData && (
            <S.ProfileBox>
              <S.ProfileBoxImg
                src={userData.image_source}
                alt="프로필 로고"
              />
              <S.ProfileText>
                <span>{userData.email || ""}</span>
              </S.ProfileText>
            </S.ProfileBox>
          )}
          <LogoutButton />
        </S.Gnd>
      </S.Nav>
    </>
  );
}

export default Header;
