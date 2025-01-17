import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import cl from "./Search.module.scss";

export default function SearchByWord({ getFilter }) {
  const [word, setWord] = useState("");

  const wordForFilter = () => {
    if (word === "") return;
    const filter = word.trim();
    getFilter(filter);
    setWord("");
  };

  //   console.log(word);
  return (
    <div>
      <label className={cl.wrapSearch}>
        <input
          type="text"
          placeholder="Пошук по слову"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="button" onClick={wordForFilter}>
          <FaSearch className={cl.icon} />
        </button>
      </label>
    </div>
  );
}
