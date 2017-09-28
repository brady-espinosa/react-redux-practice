import React from "react";
import { render } from "react-dom";

const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("div", { style: { color: props.color } }, props.title),
  );
};

const MyFirstComponent = function() {
  return ce(
    "div",
    null,

    ce(MyTitle, { title: "Game for Thrones", color: "red" }),
    ce(MyTitle, { title: "Stranger Things", color: "peru" }),
    ce(MyTitle, { title: "Rick and Morty" }),
    ce(MyTitle, { title: "Poop Mcgee" }),
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
