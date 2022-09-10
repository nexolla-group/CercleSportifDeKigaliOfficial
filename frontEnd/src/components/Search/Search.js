import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearchKey }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-2 mb-4">
      <input
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        placeholder="Search for Playground ex: football"
        type="text"
        className={styles.input}
        name=""
        id=""
      />
     
    </form>
  );
};

export default Search;
