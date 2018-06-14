import styles from "./title.css";
import Component from "../../methods/component";

const Title = new Component(({ greeting, sitename }) => {
  const title = document.createElement("h1");
  title.textContent = `${greeting} ${sitename}`;
  title.className = styles.normal;
  return title;
});

export default Title;
