import React, { useEffect, useState } from "react";
import cl from "./item.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";
import SocialNetworks from "./SocialNetworks";
import Overlay from "../../Overlay/Overlay";
import Notice from "../../Notif/Notice";
import GetReviews from "../../Modal/GetReview/GetReviews";
import { createPortal } from "react-dom";
import CreateReview from "../../Modal/AddReview/CreateReview";

export default function Offer({ item }) {
  const [isRead, setIsRead] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const isReviews = item.reviews.length > 0;
  // console.log(isReviews);

  const openRead = () => {
    setIsRead(true);
  };
  const closeRead = () => {
    setIsRead(false);
  };

  const openAdd = () => {
    setIsAdd(true);
  };

  const closeAdd = () => {
    setIsAdd(false);
  };

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
      <div className={cl.bottomCase}>
        <SocialNetworks item={item} />

        <div className={cl.reviewBtn}>
          <button type="button" onClick={openRead}>
            Прочитати відгуки
          </button>
          {isRead &&
            isReviews &&
            createPortal(
              <Overlay
                closeModal={closeRead}
                content={<GetReviews reviews={item.reviews} />}
              />,
              document.body
            )}
          {isRead && !isReviews && (
            <Notice mess="Нажаль, відгуків нема" closeRead={closeRead} />
          )}
          <button type="button" onClick={openAdd}>
            Залишити відгук
          </button>
          {isAdd &&
            createPortal(
              <Overlay
                closeModal={closeAdd}
                content={<CreateReview item={item} />}
              />,
              document.body
            )}
        </div>
      </div>
    </div>
  );
}
