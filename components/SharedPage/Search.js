import { useState, useEffect } from "react";
import * as S from "@/components/FolderPage/Styled";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [searchClose, setSearchClose] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    if (storedValue) {
      setSearchValue(storedValue);
      setSearchClose(true);
    }
  }, []);

  const InputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (newValue !== "") {
      setSearchClose(true);
    }
    localStorage.setItem("searchValue", newValue);
  };

  const search = () => {
    if (!searchValue) {
      router.push("/");
      return;
    }

    router.push(`/links?folderId=${searchValue}`);
  };

  useEffect(() => {
    search;
    InputChange;
  }, [searchValue]);

  const searchReset = () => {
    setSearchValue("");
    setSearchClose(false);
    localStorage.removeItem("searchValue");
  };

  return (
    <S.ArticleContainer>
      <S.SearchBar onSubmit={search}>
        <div>
          <button type="submit">
            <S.SearchImage src={"/assets/Icon/search.svg"} alt="검색이미지" />
          </button>
          <S.SearchInput
            name="search"
            placeholder="링크를 검색해보세요."
            value={searchValue}
            onChange={InputChange}
            type="text"
          />
        </div>
        {searchClose && (
          <button onClick={searchReset}>
            <img src={"/assets/Icon/_close.png"} alt="닫기이미지" />
          </button>
        )}
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
