import React from "react";
import Header from "./Header/Header";
import Events from "./Home-Rest/Events";
import Poster from "./Home-Rest/Poster";
function Home() {
  return (
    <>
      <Header />
      <Poster />
      <Events />
    </>
  );
}

export default Home;
