import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import cl from "./search.module.scss";

export default function SearchByWord({ getFilter, arrLenght }) {
  const [word, setWord] = useState("");

  const wordForFilter = () => {
    if (word === "") return;
    const filter = word.trim();
    getFilter(filter);
    setWord("");
  };

  //   console.log(word);
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
        <button type="button" onClick={wordForFilter}>
          <FaSearch className={cl.icon} />
        </button>
      </label>
    </div>
  );
}
