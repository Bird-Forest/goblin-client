import React from "react";
import { categoryPerson } from "../../constants/category-person";
import { NavLink } from "react-router";
import cl from "./Navigate.module.scss";

export default function NavPerson() {
  return (
    <ul className={cl.listLink}>
      {categoryPerson.map((item, i) => (
        <li key={i} className={cl.wrapLink}>
          <NavLink to={`person/${item.path}`}>
            {({ isActive }) => (
              <span
                className={isActive ? `${cl.link} ${cl.active}` : `${cl.link}`}
              >
                {item.title}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
