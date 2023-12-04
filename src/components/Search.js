import searchImg from "../Image/search.svg";
import * as S from "./Styled";

function Search() {
  return (
    <S.Article>
      <S.ArticleContainer>
        <S.SearchBar>
          <img src={searchImg} alt="검색이미지" />
          <S.SearchInput placeholder='링크를 검색해보세요.'></S.SearchInput>
        </S.SearchBar>
      </S.ArticleContainer>
    </S.Article>
  );
}
export default Search;
