import style from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${style.kgItem} list-group-item ${bought && "active"}`}>
      {foodItem}
      <button className={style.buyButton} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};
export default Item;
