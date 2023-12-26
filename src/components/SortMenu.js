import * as S from "./Styled";
import "../indexCss.css";
import sortPlusImg from "../Image/add.svg";

function SortMenu({ data, clickSortName, selectSortName }) {
  return (
    <S.SortContainer>
      <div>
        <S.SortBox>
          <S.SortButton
            value=""
            title="전체"
            onClick={clickSortName}
            selectSortName={selectSortName}
          >
            전체
          </S.SortButton>
          {data &&
            data.map((item) => (
              <S.SortButton
                className={selectSortName}
                value={item.id}
                title={item.name}
                onClick={clickSortName}
                style={{
                  backgroundColor:
                    selectSortName === item.id ? "#6D6AFE" : "#fff",
                  color: selectSortName === item.id ? "#fff" : "black",
                }}
              >
                {item.name}
              </S.SortButton>
            ))}
        </S.SortBox>
      </div>
      <div>
        <S.SortInput></S.SortInput>
        <S.SortPlusImg src={sortPlusImg}></S.SortPlusImg>
      </div>
    </S.SortContainer>
  );
}

export default SortMenu;
