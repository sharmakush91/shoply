import { useSelector } from "react-redux";
import styles from "./ProductList.module.css";
import ProductByCategory from "./ProductByCategory";
import mensBanner from "../assets/Images/Mens.png";

function ProductList() {
  const items = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);

  if (status === "loading") {
    return <span className={styles.loader}></span>;
  }

  if (status === "succeeded") {
    return (
      <div className={styles.categoryWrapper}>
        <div className={styles.bannerWrapper}>
          <img
            src={mensBanner}
            alt="Mens Banner"
            className={styles.bannerImg}
          />
        </div>
        {items.map((item) => (
          <ProductByCategory key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
export default ProductList;
