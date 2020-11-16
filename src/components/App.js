import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import "../assets/styles/App.scss";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Item from "./Item";
import Footer from "./Footer";

const App = () => {
  const [tendencies, setTendencies] = useState([]);
  const [myList, setMyList] = useState([]);
  const [originals, setOriginals] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let [reqRecommended, reqOriginals] = await Promise.all([
        fetch("https://api.audioboom.com/channels/recommended"),
        fetch(
          "https://api.audioboom.com//channels/recommended?category_ids[]=178"
        ),
      ]);

      let [dataRecommended, dataOriginals] = await Promise.all([
        await reqRecommended.json(),
        await reqOriginals.json(),
      ]);

      const recommended = dataRecommended.body;
      const others = dataOriginals.body;

      setTendencies(recommended);
      setOriginals(others);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tendencies);

  return (
    <div>
      <Header />
      <Search />

      {myList.length > 0 && (
        <Categories title="My List">
          <Carousel>
            <Item />
            <Item />
            <Item />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencies">
        <Carousel>
          {tendencies.map((podcast) => (
            <Item
              key={podcast.id}
              title={podcast.title}
              image={podcast.urls.logo_image.original}
              created={podcast.created_at}
            />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originals">
        <Carousel>
          {originals.map((podcast) => (
            <Item
              key={podcast.id}
              title={podcast.title}
              image={podcast.urls.logo_image.original}
              created={podcast.created_at}
            />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
