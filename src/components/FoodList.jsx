import FoodItems from "./FoodItems";
import ErrMsg from "./ErrMsg";
import Container from "./Container";
import styles from "./Container.module.css";
import FoodInput from "./FoodInput";

function FoodList({ items, handleOnChange, textState, handleKeyDown }) {
  return (
    <>
      <Container>
        <div className={styles.foodHeading}>Healthy Food List</div>
        <FoodInput
          handleOnChange={handleOnChange}
          handleKeyDown={handleKeyDown}
        ></FoodInput>

        <FoodItems items={items}></FoodItems>

        <ErrMsg items={items}></ErrMsg>
      </Container>
      <Container>
        <p>{textState}</p>
      </Container>
    </>
  );
}

export default FoodList;
