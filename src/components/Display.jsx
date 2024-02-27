import styles from "./Display.module.css";

const Display = ({ result }) => {
  return (
    <input
      className={styles.display}
      type="text"
      placeholder={result}
      readOnly
    />
  );
};
export default Display;
