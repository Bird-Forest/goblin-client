import { Suspense } from "react";
import { NavLink, Outlet } from "react-router";
import cl from "./page.module.scss";

export default function ServiceLayout() {
  return (
    <div className={cl.service}>
      <nav>
        <NavLink to="people">Для господарів</NavLink>
        <NavLink to="home">Для дому</NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
