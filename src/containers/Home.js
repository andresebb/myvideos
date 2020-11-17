import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Item from "../components/Item";
import useInitialState from "../hooks/useInitialState";

const API = "https://api.audioboom.com/channels/recommended";

const Home = () => {
  const [myList, setMyList] = useState([]);

  const podcast = useInitialState(API);

  return (
    <div>
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
          {podcast.map((podcast) => (
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
          {podcast.map((podcast) => (
            <Item
              key={podcast.id}
              title={podcast.title}
              image={podcast.urls.logo_image.original}
              created={podcast.created_at}
            />
          ))}
        </Carousel>
      </Categories>
    </div>
  );
};

export default Home;
