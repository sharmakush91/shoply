import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./Slices/ProductDataslice";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  return (
    <div className={styles.app}>
      <SearchBar />
      <NavBar />
    </div>
  );
}

export default App;
