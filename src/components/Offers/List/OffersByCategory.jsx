import React, { useEffect, useState } from "react";
import cl from "./List.module.scss";
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

  // console.log(arrFilter);
  const Arr = Array.isArray(arrFilter) && arrFilter.length > 0;
  return (
    <div>
      <div className={cl.servicePage}>
        <SearchByWord getFilter={getFilter} />
        <div>
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
        </div>
      </div>
    </div>
  );
}
