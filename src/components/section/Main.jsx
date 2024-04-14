import React from "react";
import Header from "./Header";

const Main = (props) => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
    </>
  );
};

export default Main;
