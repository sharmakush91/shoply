import styles from "./ProductByCategory.module.css";
import { Link } from "react-router-dom";

function ProductByCategory({ item }) {
  const images = item?.images?.[0] ? item.images[0] : item?.images?.[1];
  return (
    <div className={styles.mensContainer}>
      <div className={styles.mensIndvidualCard}>
        <Link to={`/product/${item.id}`} className={styles.cardLink}>
          <img src={images}></img>
          <h3>{item.title}</h3>
        </Link>
        <h4>{item.description}</h4>
        <h5>{`$ ${item.price}`}</h5>
      </div>
    </div>
  );
}

export default ProductByCategory;
