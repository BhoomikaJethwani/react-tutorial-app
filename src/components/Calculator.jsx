import { useState } from "react";
import ButtonContainer from "./ButtonsContainer";
import styles from "./Calculator.module.css";
import Display from "./Display";

const Calculator = () => {
  let [result, setResult] = useState("");
  //   let [calcVal, setCalcVal] = useState(0);
  const onButtonClick = (button) => {
    // console.log(button);
    if (button === "C") {
      setResult("");
    } else if (button === "=") {
      const ans = eval(result);
      setResult(ans);
    } else {
      setResult(result + button);
    }
  };

  return (
    <>
      <div className={styles.calc}>
        <Display result={result}></Display>
        <ButtonContainer onClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
};
export default Calculator;
