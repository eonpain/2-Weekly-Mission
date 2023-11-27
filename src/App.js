import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Card from "./Card";
import { useEffect, useState } from "react";
import Article from "./Article";

function App() {
  const [carduser, setCardUser] = useState();
  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((result) => result.folder.links)
      .then((carddata) => setCardUser(carddata));
  }, []);

//   console.log(carduser);
  return (
    <>
      <Header></Header>
      <Section></Section>
      <Article></Article>
      <div className="cardBox">
        {carduser && carduser.map((data) => <Card key={data.id} data={data} />)}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
