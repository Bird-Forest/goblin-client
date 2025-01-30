import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router";
import cl from "./page.module.scss";
import NavigateAuth from "../components/NavAuth/NavigateAuth";

export default function AuthLayout() {
  return (
    <div className={cl.auth}>
      <NavigateAuth />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
