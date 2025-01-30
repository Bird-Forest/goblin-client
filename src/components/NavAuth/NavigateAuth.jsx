import React from "react";
import cl from "./navauth.module.scss";
import { NavLink } from "react-router";

export default function NavigateAuth() {
  return (
    <div className={cl.wrapAuth}>
      <NavLink to="signin">
        {({ isActive }) => (
          <span className={isActive ? `${cl.link} ${cl.active}` : `${cl.link}`}>
            Вхід
          </span>
        )}
      </NavLink>
      <NavLink to="signup">
        {({ isActive }) => (
          <span className={isActive ? `${cl.link} ${cl.active}` : `${cl.link}`}>
            Реєстрація
          </span>
        )}
      </NavLink>
      <NavLink to="forget">
        {({ isActive }) => (
          <span className={isActive ? `${cl.link} ${cl.active}` : `${cl.link}`}>
            Забули пароль
          </span>
        )}
      </NavLink>
    </div>
  );
}
