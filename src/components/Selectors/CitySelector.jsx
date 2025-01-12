import { useState } from "react";
import { cities } from "../../constants/cities";
import ArrowBtn from "./ArrowBtn";
import cl from "./CitySelector.module.scss";

export default function CitySelector({ setSelectedCity }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState({});

  const getCity = (el) => {
    setOption(el);
    setSelectedCity(el);
    setOpen(false);
  };

  return (
    <div className={cl.select}>
      <label className={cl.wrapInput}>
        <input
          type="text"
          defaultValue={option.city}
          readOnly={option.city}
          placeholder="Оберіть найближче місто..."
        />
        <button
          type="button"
          onClick={() => setOpen(!open)}
          // className={styles.btnOpen}
        >
          <ArrowBtn />
          {/* <IoMdArrowDropdown className={styles.iconOpen} /> */}
        </button>
      </label>
      <div className={!open ? cl.hidden : cl.visible}>
        <ul className={cl.options}>
          {cities.map((el, i) => (
            <li key={i} onClick={() => getCity(el)}>
              {el.city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
