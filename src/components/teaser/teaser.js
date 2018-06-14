import styles from "./teaser.css";
import Component from "../../methods/component";

const Teaser = new Component(name => {
  const teaser = document.createElement("p");
  teaser.classList.add(...styles.light.split(" "));
  teaser.textContent = `Welcome to this page called ${name}. It is build with Webpack and uses custom build components and css modules which is just awesome!`;
  return teaser;
});

export default Teaser;
