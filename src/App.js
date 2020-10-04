import React from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import Intro from "./components/intro/intro.component";
import Tool from "./components/tools/tools.component";
import Skillsets from "./components/skillsets/skillsets.component";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skillsets />
      <Tool />
    </>
  );
}

export default App;
