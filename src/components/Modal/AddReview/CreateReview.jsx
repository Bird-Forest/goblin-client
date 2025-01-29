import React, { useState } from "react";
import cl from "./add.module.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckBox from "../../Form/CheckBox";
import Input from "../../Form/Input";
import Textarea from "../../Form/Textarea";
import { FaXmark } from "react-icons/fa6";

const schema = yup
  .object({
    user: yup
      .string()
      .min(3, "мінімум три символи")
      .trim()
      .required("поле обовязкове"),
    stars: yup
      .array()
      .of(yup.boolean())
      .default([false, false, false, false, false]),
    comment: yup.string().trim().required("поле обовязкове"),
  })
  .required();

export default function CreateReview({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    // mode: "onChange",
    resolver: yupResolver(schema),
  });

  // console.log(errors);
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className={cl.wrapForm}
      >
        <button className={cl.close} onClick={closeModal}>
          <FaXmark />
        </button>
        <Input
          label="Ваше ім’я"
          name="user"
          placeholder="..."
          register={register}
          errors={errors}
        />

        <div className={cl.case}>
          <p>
            Оцініть роботу майстра <span>*</span>
          </p>
          <Controller
            control={control}
            name="stars"
            render={({ field: { onChange, value } }) => (
              <CheckBox onChange={onChange} name="stars" value={value} />
            )}
          />
        </div>
        <Textarea
          label="Напишіть коротенький відгук"
          name="comment"
          placeholder="..."
          register={register}
          errors={errors}
        />
        <div className={cl.btnWrap}>
          <button type="submit" className={cl.btn}>
            Зареєструватись
          </button>
        </div>
      </form>
    </>
  );
}

// const [userName, setUserName] = useState("");
// const [text, setText] = useState("");
// const [checkboxStates, setCheckboxStates] = useState([
//   false,
//   false,
//   false,
//   false,
//   false,
// ]);

// const handleRatingChange = (index) => {
//   const newCheckboxStates = checkboxStates.map((_, i) => i <= index);
//   console.log(newCheckboxStates);
//   setCheckboxStates(newCheckboxStates);
// };

// const handleReview = () => {
//   const newReview = {
//     user: userName,
//     stars: checkboxStates,
//     text: text,
//   };
// };

// const init = {
//   user: "",
//   stars: [false, false, false, false, false],
//   comment: "",
// };

// import React, { useState } from "react";
// import cl from "./add.module.scss";
// import { FaStar, FaRegStar } from "react-icons/fa";

// export default function CreateReview() {
//   const [checkboxStates, setCheckboxStates] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const handleRatingChange = (index) => {
//     const newCheckboxStates = checkboxStates.map((_, i) => i <= index);
//     console.log(newCheckboxStates);
//     setCheckboxStates(newCheckboxStates);
//   };

//   const handleReview = () => {
//     const newReview = {
//       stars: checkboxStates,
//     };
//   };

//   return (
//     <>
//       <form onChange={handleReview} className={cl.wrapForm}>
//         <div className={cl.case}>
//           <p>
//             Оцініть роботу майстра <span>*</span>
//           </p>
//           <ul className={cl.caseStars}>
//             {checkboxStates.map((el, i) => (
//               <li key={i}>
//                 <input
//                   name="rating"
//                   type="checkbox"
//                   onChange={() => handleRatingChange(i)}
//                   checked={checkboxStates[i]}
//                   className={cl.box}
//                 />
//                 {checkboxStates[i] ? (
//                   <FaStar className={cl.star} />
//                 ) : (
//                   <FaRegStar className={cl.star} />
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className={cl.btnWrap}>
//           <button type="button" onClick={handleReview}>
//             Відправити відгук
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

//  <label htmlFor="name" className={cl.case}>
//    <p>
//      Ім’я <span>*</span>
//    </p>
//    <input
//      autoFocus
//      name="name"
//      type="text"
//      placeholder="Ваше ім’я"
//      value={userName}
//      required
//      onChange={(e) => setUserName(e.target.value)}
//      className={cl.caseInput}
//    />
//  </label>;

//  <label htmlFor="text" className={cl.case}>
//    <p>
//      Напишіть коротенький відгук <span>*</span>
//    </p>
//    <textarea
//      name="text"
//      type="text"
//      placeholder="Відгук..."
//      value={text}
//      onChange={(e) => setText(e.target.value)}
//      required
//      className={cl.caseTextarea}
//    ></textarea>
//  </label>;
