import React from "react";
import Header from "./Header";
import Search from "./Search";
import "../assets/styles/App.scss";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Item from "./Item";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Search />

      <Categories title="My List">
        <Carousel>
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Categories>

      <Categories title="Tendencies">
        <Carousel>
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Categories>

      <Categories title="Originals">
        <Carousel>
          <Item />
          <Item />
          <Item />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
