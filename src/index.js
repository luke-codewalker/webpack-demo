import render from "./methods/render";
import Title from "./components/title/title";
import Teaser from "./components/teaser/teaser";
import Counter from "./components/counter/counter";

render(
  document.querySelector(".root"),
  Title({ greeting: "Welcome to", sitename: "Webpack Test" }),
  Teaser("Webpack Test", Counter())
);
