import { FaCar, FaUserMd, FaSnowplow } from "react-icons/fa";

const icons = [
  { name: "health", Component: FaCar },
  { name: "sport", Component: FaUserMd },
];

export const getIcon = (route) => {
  const iconData = icons.find((icon) => icon.name === route);
  return iconData ? <iconData.Component /> : null;
  // return <IconComponent />;
};
// export default function getIconPerson(route) {
//   switch (route) {
//     case "health":
//       return <FaCar />;
//     case "sport":
//       return <FaUserMd />;
//     case "beauty":
//       return <FaSnowplow />;
//     default:
//       return null;
//   }
// }
