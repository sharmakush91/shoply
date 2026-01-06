import styles from "./SearchBar.module.css";
import { useState } from "react";
import { fetchSearchBarResults } from "../Slices/AutosearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.searchBar.items);
  console.log(search);

  const handleSearch = function (e) {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchSearchBarResults({ search }));
    }, 500);

    return () => clearTimeout(timer);
  }, [search, dispatch]);

  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        value={search}
        placeholder="What are you looking for?"
        onChange={handleSearch}
      ></input>
    </div>
  );
}

export default SearchBar;
