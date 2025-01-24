import React, { useEffect } from "react";
import cl from "./notice.module.scss";

export default function Notice({ mess, closeRead }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeRead();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [closeRead]);
  return <p className={cl.wrapNotice}>{mess}</p>;
}
