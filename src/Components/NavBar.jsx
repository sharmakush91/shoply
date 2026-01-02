import { useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
import { fetchProducts } from "../Slices/ProductDataslice";
import { clearItems } from "../Slices/ProductDataslice";

function NavBar() {
  const dispatch = useDispatch();

  function handleClick(type) {
    dispatch(clearItems());
    const masterCategory = {
      mens: ["mens-shirts", "mens-shoes", "mens-watches"],
      womens: [
        "womens-dresses",
        "tops",
        "womens-shoes",
        "womens-bags",
        "womens-watches",
      ],
      electronics: ["smartphones", "mobile-accessories", "laptops", "tablets"],
      makeup: ["beauty", "fragrances", "skin-care"],
      furniture: ["furniture"],
      kitchen: ["kitchen-accessories"],
      sports: ["sports-accessories"],
    };

    const selectCateogries = masterCategory[type];

    selectCateogries.map((cat) => {
      dispatch(fetchProducts({ categories: cat }));
    });
  }

  return (
    <div className={styles.productCategories}>
      <span onClick={() => handleClick("mens")}>Mens</span>
      <span onClick={() => handleClick("womens")}>Womens</span>
      <span onClick={() => handleClick("electronics")}>Electronics</span>
      <span onClick={() => handleClick("furniture")}>Furniture</span>
      <span onClick={() => handleClick("kitchen")}>kitchen</span>
      <span onClick={() => handleClick("sports")}>Sports</span>
    </div>
  );
}

export default NavBar;

//#fe718d spinner color
