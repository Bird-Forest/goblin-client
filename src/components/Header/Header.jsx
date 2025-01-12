import LogoSide from "./Logo/LogoSide";
// import SideBar from "./SideBar/SideBar";
import cl from "./Header.module.scss";

export default function Header() {
  return (
    <div className={cl.wrapper}>
      <LogoSide />
      {/* <SideBar /> */}
    </div>
  );
}
