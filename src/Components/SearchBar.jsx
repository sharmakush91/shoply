import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="search" placeholder="What are you looking for?"></input>
    </div>
  );
}

export default SearchBar;
