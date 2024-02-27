import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange, handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food item"
      className={styles.foodInput}
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
