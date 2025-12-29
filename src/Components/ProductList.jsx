import { useSelector } from "react-redux";
import styles from "./ProductList.module.css";
import Mens from "./Mens";

function ProductList() {
  const items = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);

  if (status === "loading") {
    return <span className={styles.loader}></span>;
  }

  return (
    <div className={styles.categoryWrapper}>
      {items
        .filter((item) => item.category === "men's clothing")
        .map((item) => (
          <Mens key={item.id} item={item} />
        ))}
    </div>
  );
}

export default ProductList;
