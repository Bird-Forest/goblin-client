import React from "react";
import { categoryHome } from "../../constants/category-home";
import { NavLink } from "react-router";
import cl from "./Navigate.module.scss";

export default function NavHome() {
  return (
    <ul className={cl.listLink}>
      {categoryHome.map((item, i) => (
        <li key={i} className={cl.wrapLink}>
          <NavLink to={`home/${item.path}`}>
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
