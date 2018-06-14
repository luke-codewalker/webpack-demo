import styles from "./counter.css";

export default function Counter() {
  let count = 0;
  const countDisplay = document.createElement("span");
  countDisplay.textContent = ` Clicks: ${count} `;
  countDisplay.classList.add(styles.pointer);
  countDisplay.addEventListener("click", e => {
    e.preventDefault();
    count++;
    countDisplay.textContent = ` Clicks: ${count} `;
  });
  return countDisplay;
}
