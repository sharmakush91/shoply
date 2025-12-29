import { useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
import { fetchProducts } from "../Slices/ProductDataslice";

function NavBar() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchProducts());
  }

  return (
    <div className={styles.productCategories}>
      <span onClick={handleClick}>Mens</span>
      <span>Womens</span>
      <span>Electronics</span>
      <span>Jewelry</span>
    </div>
  );
}

export default NavBar;

//#fe718d spinner color
