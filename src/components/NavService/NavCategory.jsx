import React from "react";
import { NavLink } from "react-router";
import cl from "./navservice.module.scss";

export default function NavCategory({ page, category }) {
  return (
    <ul className={cl.listLink}>
      {category.map((item, i) => (
        <li key={i} className={cl.wrapLink}>
          <NavLink to={`${page}/${item.path}`}>
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
