import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.productCategories}>
      <span>Mens</span>
      <span>Womens</span>
      <span>Electronics</span>
      <span>Jewelry</span>
    </div>
  );
}

export default NavBar;
