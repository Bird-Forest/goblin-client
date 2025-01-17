import { NavLink } from "react-router";
import cl from "./LogoSide.module.scss";
import home2 from "/home-2.png";
// import home1 from "/home-1.png";

export default function LogoSide() {
  return (
    <NavLink to="/" end className={cl.logo}>
      <img src={home2} width={48} height={48} />
      <p className={cl.oiRegular}>Домовик</p>
    </NavLink>
  );
}
