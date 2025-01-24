import React, { useState } from "react";
import cl from "./add.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function CreateReview({ item }) {
  let id = item;
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");
  const [checkboxStates, setCheckboxStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleRatingChange = (index) => {
    const newCheckboxStates = checkboxStates.map((_, i) => i <= index);
    console.log(newCheckboxStates);
    setCheckboxStates(newCheckboxStates);
  };

  const handleReview = () => {
    const newReview = {
      name: userName,
      stars: checkboxStates,
      text: text,
    };

    console.log(newReview);
  };

  return (
    <>
      <form onChange={handleReview} className={cl.wrapForm}>
        <label htmlFor="name" className={cl.case}>
          <p>
            Ім’я <span>*</span>
          </p>
          <input
            autoFocus
            name="name"
            type="text"
            placeholder="Ваше ім’я"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
            className={cl.caseInput}
          />
        </label>

        <div className={cl.case}>
          <p>
            Оцініть роботу майстра <span>*</span>
          </p>
          <ul className={cl.caseStars}>
            {checkboxStates.map((el, i) => (
              <li key={i}>
                <input
                  name="rating"
                  type="checkbox"
                  onChange={() => handleRatingChange(i)}
                  checked={checkboxStates[i]}
                  className={cl.box}
                />
                {checkboxStates[i] ? (
                  <FaStar className={cl.star} />
                ) : (
                  <FaRegStar className={cl.star} />
                )}
              </li>
            ))}
          </ul>
        </div>

        <label htmlFor="text" className={cl.case}>
          <p>
            Напишіть коротенький відгук <span>*</span>
          </p>
          <textarea
            name="text"
            type="text"
            placeholder="Відгук..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className={cl.caseTextarea}
          ></textarea>
        </label>

        <div className={cl.btnWrap}>
          <button type="button" onClick={handleReview}>
            Відправити відгук
          </button>
        </div>
      </form>
    </>
  );
}
