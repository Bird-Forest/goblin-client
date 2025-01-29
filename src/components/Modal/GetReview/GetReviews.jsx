import React from "react";
import cl from "./get.module.scss";
// import reviews from "./reviews.json";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function GetReviews({ reviews, closeModal }) {
  return (
    <div className={cl.wrapContent}>
      <button className={cl.close} onClick={closeModal}>
        <FaXmark />
      </button>
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
    </div>
  );
}
