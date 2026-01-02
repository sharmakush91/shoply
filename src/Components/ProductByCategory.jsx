import styles from "./ProductByCategory.module.css";

function Mens({ item }) {
  const images = item?.images?.[0] ? item.images[0] : item?.images?.[1];
  return (
    <div className={styles.mensContainer}>
      <div className={styles.mensIndvidualCard}>
        <img src={images}></img>
        <h3>{item.title}</h3>
        <h4>{item.description}</h4>
        <h5>{`$ ${item.price}`}</h5>
      </div>
    </div>
  );
}

export default Mens;
