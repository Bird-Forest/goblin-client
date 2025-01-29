import React, { useState } from "react";
import cl from "./list.module.scss";
import Offer from "../Item/Offer";
import SearchByWord from "../Search/SearchByWord";
import EmptyPage from "../../Helper/EmptyPage";

export default function OffersByCategory({ data }) {
  const [arrFilter, setArrFilter] = useState(data);

  const getFilter = (word) => {
    let arr = [];
    data.filter((el) => {
      const isPresent = el.text.toLowerCase().includes(word.toLowerCase());
      if (isPresent === true) {
        arr.push(el);
      }
    });
    setArrFilter(arr);
  };

  const clearFilter = () => {
    setArrFilter(data);
  };

  const arrLenght = arrFilter.length;

  const Arr = Array.isArray(arrFilter) && arrLenght > 0;
  return (
    <div className={cl.wrapOffers}>
      <SearchByWord
        getFilter={getFilter}
        arrLenght={arrLenght}
        clearFilter={clearFilter}
      />
      <>
        {Arr ? (
          <ul className={cl.listOffers}>
            {arrFilter.map((item, i) => (
              <li key={i}>
                <Offer item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyPage />
        )}
      </>
    </div>
  );
}
