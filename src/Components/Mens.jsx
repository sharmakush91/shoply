import styles from "./Mens.module.css";

function Mens({ item }) {
  return (
    <div className={styles.mensContainer}>
      <div className={styles.mensIndvidualCard}>
        <img src={item.image}></img>
        <h3>{item.title}</h3>
        <h4>{item.description}</h4>
      </div>
    </div>
  );
}

export default Mens;
