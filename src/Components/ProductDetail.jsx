import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const items = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const product = items.find((item) => item.id === Number(id));
  const stars = [1, 2, 3, 4, 5];
  const currentRating = Math.floor(product.rating);

  if (status === "loading") {
    return <span className={styles.loader}></span>;
  }

  return (
    <div className={styles.productContainer}>
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>
      <div>
        {stars.map((num) => (
          <span key={num}>{num <= currentRating ? "★" : "☆"}</span>
        ))}
        <span> ({product.rating})</span>
      </div>

      <h2>${product.price}</h2>
      <p>In stock: {product.stock > 5 ? "Yes" : "Low Availability"}</p>
      <select className={styles.quantitySelect}>
        {stars.map((num) => (
          <option key={num} vlue={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
export default ProductDetail;
