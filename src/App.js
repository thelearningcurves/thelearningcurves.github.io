import React from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import Intro from "./components/intro/intro.component";
import Tool from "./components/tools/tools.component";
import Skillset from "./components/skillset/skillset.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skillset />
      <Tool />
      <Footer />
    </>
  );
}

export default App;
