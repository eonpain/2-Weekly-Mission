import { useState, useEffect } from "react";
import searchImg from "../Image/search.svg";
import closeImg from "../Image/_close.png";
import * as S from "./Styled";
import { useSearchParams, Link } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchClose, setSearchClose] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    if (storedValue) {
      setSearchValue(storedValue);
    }
    if (searchValue !== "") {
      setSearchClose(true);
    }
  }, [searchValue]);

  const InputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setSearchValue(e.target.value);
    localStorage.setItem("searchValue", newValue);
  };

  const search: React.MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchValue });
  };

  const searchReset = () => {
    setSearchValue("");
    setSearchClose(false);
    localStorage.removeItem("searchValue");
  };

  return (
    <S.ArticleContainer>
      <S.SearchBar onClick={search}>
        <div>
          <button type="submit">
            <S.SearchImage src={searchImg} alt="검색이미지" />
          </button>
          <S.SearchInput
            placeholder="링크를 검색해보세요."
            value={searchValue}
            onChange={InputChange}
            type="text"
          />
        </div>
        {searchClose ? (
          <Link to="" onClick={searchReset}>
            <img src={closeImg} alt="닫기이미지" />
          </Link>
        ) : null}
      </S.SearchBar>
      {searchValue && (
        <S.SearchResultWrapper>
          <h1>{searchValue}</h1>
          <h2>으로 검색한 결과입니다</h2>
        </S.SearchResultWrapper>
      )}
    </S.ArticleContainer>
  );
}
export default Search;
