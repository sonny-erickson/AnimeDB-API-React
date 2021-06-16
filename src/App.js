import { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () =>{
    const acces = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json())
      SetTopAnime(acces.top.slice(0,5));
  }

  const HandleSearch = e => {
    e.preventDefault();
    console.log(search);
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
      const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=10`)
        .then(res=> res.json())
        console.log(temp.results);  
      SetAnimeList(temp.results);

          // SetSearch('');
  }

  useEffect(()=>{
    GetTopAnime();
  },[])

  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <SideBar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
      
    </div>
  );
}

export default App;
