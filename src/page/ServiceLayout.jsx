import { Suspense } from "react";
import { Outlet } from "react-router";
import cl from "./page.module.scss";
import NavigateService from "../components/NavService/NavigateService";

export default function ServiceLayout() {
  return (
    <div className={cl.service}>
      <NavigateService />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
