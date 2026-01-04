import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
