import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import cl from "./form.module.scss";

export default function CheckBox({ onChange, name, value }) {
  const [checkboxStates, setCheckboxStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const getStars = (index) => {
    value = checkboxStates.map((_, i) => i <= index);
    console.log(value);
    setCheckboxStates(value);

    onChange(value);
  };

  // console.log(value);

  return (
    <ul className={cl.caseStars}>
      {checkboxStates.map((el, i) => (
        <li key={i}>
          <input
            name={name}
            type="checkbox"
            onChange={() => getStars(i)}
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
  );
}

{
  /* <div className="star-rating">
  {Array.from({ length: 5 }).map((_, index) => (
    <label key={index}>
      <input type="checkbox" {...register(`star${index + 1}`)} />
      <span className="star">★</span>
    </label>
  ))}
</div>; */
}

// import { useForm, useFieldArray } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// // ... (ваш существующий код)

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
//   control,
//   setValue,
// } = useForm({
//   resolver: yupResolver(schema),
// });

// const { fields, append, remove, insert, swap, update } = useFieldArray({
//   control,
//   name: "stars",
// });

// // ...

// const handleRatingChange = (index) => {
//   update("stars", index, (value) => !value); // Инвертируем значение элемента
// };

// // ...

// return (
//   // ...
//   <ul className={cl.caseStars}>
//     {fields.map((item, index) => (
//       <li key={index}>
//         <input
//           type="checkbox"
//           {...register(`stars.${index}`)} // Связываем с элементом массива
//           onChange={() => handleRatingChange(index)}
//           checked={item}
//           className={cl.box}
//         />
//         {/* ... */}
//       </li>
//     ))}
//   </ul>
//   // ...
// );
