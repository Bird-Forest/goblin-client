import React, { Suspense } from "react";
import cl from "./page.module.scss";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

export default function AppLayout() {
  return (
    <div className={cl.container}>
      <header className={cl.top}>
        <Header />
      </header>
      <main className={cl.page}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
