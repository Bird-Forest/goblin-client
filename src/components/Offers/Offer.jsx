import React, { useEffect, useState } from "react";
import cl from "./Offer.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";
import SocialNetworks from "./SocialNetworks";

export default function Offer({ item }) {
  // const [stars, setStars] = useState([]);

  // useEffect(() => {
  //   const newStars = calculateRating(reviews);
  //   setStars(newStars);
  // }, []);

  // const calculateRating = (reviews) => {
  //   const totalStars = reviews.reduce((acc, review) => {
  //     review.stars.forEach((star, index) => {
  //       acc[index] = (acc[index] || 0) + (star ? 1 : 0);
  //     });
  //     return acc;
  //   }, []);

  //   const averageStars = totalStars.map(
  //     (starCount) => starCount >= reviews.length / 2
  //   );
  //   return averageStars;
  // };

  return (
    <div className={cl.wrappCard}>
      <div className={cl.userInfo}>
        <h4>{item.user}</h4>
        <h4>{item.phone}</h4>
      </div>
      <div className={cl.wrapRating}>
        <ul className={cl.arrStar}>
          {item.rating.map((el, i) => (
            <li key={i}>
              {el === true ? (
                <FaStar className={cl.star} />
              ) : (
                <FaRegStar className={cl.star} />
              )}
            </li>
          ))}
        </ul>
        <p className={cl.total}>{item.reviews.length}</p>
      </div>
      <div className={cl.wrappText}>
        <p>{item.text}</p>
      </div>
      <SocialNetworks item={item} />

      <div className={cl.reviewBtn}>
        <button>Прочитати відгуки</button>
        <button>Залишити відгук</button>
      </div>
    </div>
  );
}
