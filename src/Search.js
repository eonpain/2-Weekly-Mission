import "./Folder.css";
import searchImg from "./assets/search.svg";

function Search() {
  return (
    <article>
      <div className="articleContainer">
        <div className="searchBar">
          <img src={searchImg} alt="검색이미지" />
          <input></input>
        </div>
      </div>
      </article>
  );
}
export default Search;
