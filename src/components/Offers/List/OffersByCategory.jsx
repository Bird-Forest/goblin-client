import React, { useEffect, useState } from "react";
import cl from "./list.module.scss";
import Offer from "../Item/Offer";
import SearchByWord from "../Search/SearchByWord";
import EmptyPage from "../../Helper/EmptyPage";

export default function OffersByCategory({ data }) {
  const [arrFilter, setArrFilter] = useState(data);
  const [filter, setFilter] = useState("");

  const getFilter = (word) => {
    setFilter(word);
  };

  useEffect(() => {
    if (filter === "") return;

    let arr = [];
    data.filter((el) => {
      const isPresent = el.text.toLowerCase().includes(filter.toLowerCase());
      if (isPresent === true) {
        arr.push(el);
      }
    });

    setArrFilter(arr);
  }, [data, filter]);

  const arrLenght = arrFilter.length;

  // console.log(arrFilter);
  const Arr = Array.isArray(arrFilter) && arrLenght > 0;
  return (
    <div className={cl.wrapOffers}>
      <SearchByWord getFilter={getFilter} arrLenght={arrLenght} />
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
