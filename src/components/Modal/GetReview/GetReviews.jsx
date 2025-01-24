import React from "react";
import cl from "./get.module.scss";
// import reviews from "./reviews.json";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function GetReviews({ reviews }) {
  return (
    <>
      <ul className={cl.wrapReviews}>
        {reviews.map((el, i) => (
          <li key={i} className={cl.boxReview}>
            <p className={cl.wrapInfo}>
              <span>{el.name}</span>
              <span>{el.date}</span>
            </p>
            <ul className={cl.wrapStars}>
              {el.stars.map((star, id) => (
                <li key={id}>
                  {star ? (
                    <FaStar className={cl.star} />
                  ) : (
                    <FaRegStar className={cl.star} />
                  )}
                </li>
              ))}
            </ul>
            <p className={cl.wrapComment}>{el.comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
