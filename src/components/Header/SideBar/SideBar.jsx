// import { NavLink, useLocation } from "react-router";
// import cl from "./SideBar.module.scss";
// import SideBarItem from "../SideBarItem/SideBarItem";

// const pages = [
//   { to: "service", value: "Послуги" },
//   { to: "master", value: "Майстер" },
//   { to: "auth", value: "Реєстрація" },
// ];
// // console.log(pages);
// export default function SideBar() {
//   let { pathname } = useLocation();
//   const segments = pathname.split("/");
//   const page = segments[1];

//   return (
//     <nav className={cl.navWrap}>
//       {/* <NavLink to="/" end>
//         Home
//       </NavLink> */}
//       {/* <SideBarItem /> */}
//       {pages.map((item, i) => (
//         <SideBarItem key={i} item={item} page={page} />
//       ))}
//     </nav>
//   );
// }
