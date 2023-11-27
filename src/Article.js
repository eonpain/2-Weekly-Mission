import "./Folder.css";
import searchImg from "./assets/search.svg";

function Article() {
  return (
    <>
      <div className="articleContainer">
        <div className="searchBar">
          <img src={searchImg} alt="검색이미지" />
          <input></input>
        </div>
      </div>
    </>
  );
}
export default Article;
