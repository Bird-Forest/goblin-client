import React, { useState } from "react";
import { FaXmark, FaMagnifyingGlass } from "react-icons/fa6";
import cl from "./search.module.scss";

export default function SearchByWord({ getFilter, clearFilter, arrLenght }) {
  const [word, setWord] = useState("");

  const wordForFilter = () => {
    if (word === "") return;
    const filter = word.trim();
    getFilter(filter);
  };

  const clearSearch = () => {
    setWord("");
    clearFilter();
  };

  return (
    <div className={cl.wrapSearch}>
      <p>
        Знайдено: <span>{arrLenght}</span>
      </p>
      <label className={cl.labelSearch}>
        <input
          type="text"
          placeholder="Пошук по частині слова..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className={cl.search}
        />
        <div className={cl.wrapBtn}>
          <button type="button" onClick={wordForFilter}>
            <FaMagnifyingGlass className={cl.icon} />
          </button>
          <button type="button" onClick={clearSearch}>
            <FaXmark className={cl.icon} />
          </button>
        </div>
      </label>
    </div>
  );
}
