import styles from "./ButtonsContainer.module.css";
const buttons = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];
function ButtonsContainer({ handleClick }) {
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((item) => (
        <button
          className={styles.calculatorButton}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default ButtonsContainer;
