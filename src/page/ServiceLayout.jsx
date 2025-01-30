import { Suspense } from "react";
import { Outlet } from "react-router";
import cl from "./page.module.scss";
import NavService from "../components/NavService/NavService";

export default function ServiceLayout() {
  return (
    <div className={cl.service}>
      <NavService />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
