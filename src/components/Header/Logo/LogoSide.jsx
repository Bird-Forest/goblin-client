import { NavLink } from "react-router";
import cl from "./LogoSide.module.scss";
import home2 from "/home-2.png";
// import home1 from "/home-1.png";

export default function LogoSide() {
  return (
    <NavLink to="/" end className={cl.logo}>
      {/* <span className={cl.rubikBubblesRegular}>Домовик</span>
      <span className={cl.pacificoRegular}>Домовик</span> */}
      {/* <img src={home1} width={48} height={48} />
      <span className={cl.kablammoDom}>домовик</span> */}
      <img src={home2} width={48} height={48} />
      <span className={cl.oiRegular}>Домовик</span>
    </NavLink>
  );
}
