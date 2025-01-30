import React, { useState } from "react";
import cl from "./navservice.module.scss";
import { FaXmark, FaEllipsisVertical } from "react-icons/fa6";
import { categoryPerson } from "../../constants/category-person";
import { categoryHome } from "../../constants/category-home";
import NavEmpty from "./NavEmpty";
import NavCategory from "./NavCategory";

export default function NavigateService() {
  const [page, setPage] = useState("");
  const [menu, setMenu] = useState(true);

  // console.log(page);
  return (
    <>
      <button
        type="button"
        onClick={() => setMenu(false)}
        className={cl.btnMenu}
      >
        <FaEllipsisVertical className={cl.iconMenu} />
      </button>

      <div className={menu ? `${cl.navigate}` : `${cl.navigate} ${cl.isOpen}`}>
        <button
          type="button"
          onClick={() => setMenu(true)}
          className={cl.btnClose}
        >
          <FaXmark className={cl.iconClose} />
        </button>
        <fieldset className={cl.wrappRadio}>
          <label htmlFor="person" className={cl.radio}>
            <input
              type="radio"
              id="person"
              name="page"
              value="person"
              onChange={() => setPage("person")}
            />
            <span>для господарів</span>
          </label>

          <label htmlFor="home" className={cl.radio}>
            <input
              type="radio"
              id="home"
              name="page"
              value="home"
              onChange={() => setPage("home")}
            />
            <span>для оселі</span>
          </label>
        </fieldset>

        {page === "person" && (
          <NavCategory page={page} category={categoryPerson} />
        )}
        {page === "home" && <NavCategory page={page} category={categoryHome} />}
        {!page && <NavEmpty />}
      </div>
    </>
  );
}
