import React from "react";
import cl from "./navservice.module.scss";
import { PiHandTapBold } from "react-icons/pi";

export default function NavEmpty() {
  return (
    <div className={cl.wrapStub}>
      <PiHandTapBold className={cl.iconNav} />
    </div>
  );
}
