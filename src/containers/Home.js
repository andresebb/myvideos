import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Item from "../components/Item";
import useInitialState from "../hooks/useInitialState";

const API = "https://api.audioboom.com/channels/recommended";

const Home = ({ miLista, videos }) => {
  const podcast = useInitialState(API);

  return (
    <div>
      <Search />

      {miLista.length > 0 && (
        <Categories title="My List">
          <Carousel>
            {miLista.map((podcast) => (
              <Item
                key={podcast.id}
                title={podcast.title}
                image={podcast.image}
                id={podcast.id}
                created={podcast.created}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencies">
        <Carousel>
          {podcast.map((podcast) => (
            <Item
              key={podcast.id}
              id={podcast.id}
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
              id={podcast.id}
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

const mapStateToProps = (state) => {
  return {
    miLista: state.myList,
    videos: state.podcasts,
  };
};

export default connect(mapStateToProps, null)(Home);
