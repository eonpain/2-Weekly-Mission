import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import linkImg from '../Image/link.svg';

function Section() {
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
    <S.SectionContainer>
<S.SectionContent>
          <S.LinkInputBox>
          <S.LinkImg src={linkImg} alt="링크이미지"></S.LinkImg>
          <S.SectionInput placeholder='링크를 추가해보세요'></S.SectionInput>
          </S.LinkInputBox>
          
          <S.LinkAddButton>
            <S.LinkAddText>추가하기</S.LinkAddText>
            </S.LinkAddButton>
          
          </S.SectionContent>
    </S.SectionContainer>
  );
}

// {userData ? (
//   <S.SectionContent>
//     <S.UserProfileimg
//       src={userData.folder.owner.profileImageSource}
//       alt="유저프로필사진"
//     />
//     <S.UserName>{userData.folder.owner.name}</S.UserName>
//     <S.Favorite>{userData.folder.name}</S.Favorite>
//   </S.SectionContent>
// ) : null}
export default Section;
