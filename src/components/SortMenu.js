import * as S from "./Styled";
import "../indexCss.css";
import sortPlusImg from '../Image/add.svg';

function SortMenu({ data, clickList, selectList }) {
  return (
    <S.SortContainer>
    <div>
    <S.SortBox>
      <S.SortButton value=""
        title="전체"
        onClick={clickList}
        style={{
          backgroundColor: selectList === 0 ? "#6D6AFE" : "#fff",
          color: selectList === 0 ? "#fff" : "black",
        }}>
        전체
        </S.SortButton>
        {data &&
        data.map((item) => (
          <S.SortButton
            className={selectList}
            value={item.id}
            title={item.name}
            onClick={clickList}
            style={{
              backgroundColor: selectList === item.id ? "#6D6AFE" : "#fff",
              color: selectList === item.id ? "#fff" : "black",
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
