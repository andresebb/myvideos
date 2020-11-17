import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setPodcast(data.body));
  }, []);
  return podcast;
};

export default useInitialState;
