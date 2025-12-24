import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <SearchBar />
      <NavBar />
    </div>
  );
}

export default App;
