import { useDispatch } from "react-redux";
import styles from "./NavBar.module.css";
import { fetchProducts } from "../Slices/ProductDataslice";
import { clearItems } from "../Slices/ProductDataslice";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    navigate(`/${type}`);
  }

  return (
    <div className={styles.productCategories}>
      <span onClick={() => handleClick("mens")}>Mens</span>
      <span onClick={() => handleClick("womens")}>Womens</span>
      <span onClick={() => handleClick("makeup")}>Makeup</span>
      <span onClick={() => handleClick("electronics")}>Electronics</span>
      <span onClick={() => handleClick("furniture")}>Furniture</span>
      <span onClick={() => handleClick("kitchen")}>kitchen</span>
      <span onClick={() => handleClick("sports")}>Sports</span>
    </div>
  );
}

export default NavBar;

//#fe718d spinner color
