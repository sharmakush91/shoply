import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <SearchBar />
      <NavBar />
      <ProductList />
    </div>
  );
}

export default Home;
