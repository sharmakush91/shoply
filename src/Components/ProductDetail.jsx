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
    <>
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
      </div>
      <div className={styles.addToCartContainer}>
        <select className={styles.quantitySelect}>
          {stars.map((num) => (
            <option key={num} vlue={num}>
              {num}
            </option>
          ))}
        </select>
        <button className={styles.addToCart}>Add to cart</button>
      </div>
      <div className={styles.productDetails}>
        {/* Column 1: Info */}
        <div className={styles.infoColumn}>
          <h2>Product Info</h2>
          <p>{product.description}</p>
        </div>

        {/* Column 2: Reviews */}
        <div className={styles.reviewsColumn}>
          <h2>Reviews</h2>
          {product.reviews.map((rev, index) => (
            <div key={index} className={styles.individualReview}>
              <p>
                <strong>{rev.reviewerName}</strong>
              </p>

              <p>
                {/* Compare against rev.rating so each user's score is unique */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <span key={num}>{num <= rev.rating ? "★" : "☆"}</span>
                ))}
              </p>

              <p>{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
