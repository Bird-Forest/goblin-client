import React from "react";
import cl from "./Navigate.module.scss";
import { FaCar, FaUserMd, FaSnowplow, FaPlug, FaBath } from "react-icons/fa";
// import { GiTreehouse } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { BsCake2Fill, BsTools } from "react-icons/bs";

export default function NavEmpty() {
  return (
    <div className={cl.wrapStub}>
      <div className={cl.caseRight}>
        <span className={cl.boxR}>
          <FaCar className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseLeft}>
        <span className={cl.boxL}>
          <BsTools className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseRight}>
        <span className={cl.boxR}>
          <BsCake2Fill className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseLeft}>
        <span className={cl.boxL}>
          <GiFruitTree className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseRight}>
        <span className={cl.boxR}>
          <FaUserMd className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseLeft}>
        <span className={cl.boxL}>
          <FaSnowplow className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseRight}>
        <span className={cl.boxR}>
          <FaPlug className={cl.iconEmpty} />
        </span>
      </div>
      <div className={cl.caseLeft}>
        <span className={cl.boxL}>
          <FaBath className={cl.iconEmpty} />
        </span>
      </div>
    </div>
  );
}
