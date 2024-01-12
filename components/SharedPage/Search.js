import styles from "../../styles/Shared.module.css";
import searchImg from "../../public/assets/Icon/search.svg";

function Search() {
  return (
    <article>
      <div className={styles.articleContainer}>
        <div className={styles.searchBar}>
          <img src={searchImg} alt="검색이미지" />
          <input></input>
        </div>
      </div>
      </article>
  );
}
export default Search;
