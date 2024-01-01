import searchImg from "../Image/search.svg";
import * as S from "./Styled";

function Search() {
  return (
      <S.ArticleContainer>
        <S.SearchBar>
          <img src={searchImg} alt="검색이미지" />
          <S.SearchInput placeholder='링크를 검색해보세요.'></S.SearchInput>
        </S.SearchBar>
        <S.SearchResultWrapper>
          <h1>코드잇</h1>
          <h2>으로 검색한 결과입니다</h2>
        </S.SearchResultWrapper>
      </S.ArticleContainer>
  );
}
export default Search;
