import {
  FaCar,
  FaUserMd,
  FaSnowplow,
  FaIcons,
  FaBabyCarriage,
  FaHiking,
  FaTaxi,
  FaUtensils,
  FaAccessibleIcon,
  FaWheelchair,
  FaBalanceScale,
  FaCarCrash,
  FaEllipsisH,
  FaUserGraduate,
  FaStethoscope,
} from "react-icons/fa";
import {
  FaChurch,
  FaDog,
  FaGifts,
  FaMasksTheater,
  FaPassport,
  FaKitchenSet,
  FaPersonSwimming,
  FaScissors,
} from "react-icons/fa6";
import { BsGiftFill, BsHeartPulseFill } from "react-icons/bs";
import { GiAmpleDress, GiStethoscope } from "react-icons/gi";
import { MdImportantDevices, MdFace2, MdOutlineFace2 } from "react-icons/md";

export const categoryPerson = [
  {
    path: "health",
    title: "Здоров'я",
    icon: FaUserMd,
  },
  {
    path: "sport",
    title: "Спорт",
    icon: FaPersonSwimming,
  },
  {
    path: "beauty",
    title: "Краса",
    icon: MdFace2,
    // icon: MdOutlineFace2,
  },
  {
    path: "education",
    title: "Навчання",
    icon: FaUserGraduate,
  },
  {
    path: "care",
    title: "Догляд за дорослими",
    icon: FaWheelchair,
  },
  {
    path: "child",
    title: "Догляд за дітьми",
    icon: FaBabyCarriage,
  },
  {
    path: "pets",
    title: "Догляд за тваринами",
    icon: FaDog,
  },
  {
    path: "tourism",
    title: "Туризм",
    icon: FaPassport,
  },
  {
    path: "food",
    title: "Доставка їжі",
    icon: FaUtensils,
  },
  {
    path: "present",
    title: "Подарунки handmade",
    icon: BsGiftFill,
  },
  {
    path: "leisure",
    title: "Дозвіля",
    icon: FaMasksTheater,
  },
  {
    path: "clothing",
    title: "Пошиття та ремонт",
    icon: GiAmpleDress,
  },
  {
    path: "holidays",
    title: "Все для свята",
    icon: FaIcons,
  },
  {
    path: "transport",
    title: "Транспортування людей",
    icon: FaTaxi,
  },
  {
    path: "device",
    title: "Ремонт девайсів, гаджетів",
    icon: MdImportantDevices,
  },
  {
    path: "medical",
    title: "Ремонт медприладів",
    // icon: BsHeartPulseFill,
    icon: GiStethoscope,
    icon: FaStethoscope,
  },
  {
    path: "legal",
    title: "Юридичні послуги",
    icon: FaBalanceScale,
  },
  {
    path: "funeral",
    title: "Ритуальні послуги",
    icon: FaChurch,
  },
  {
    path: "other",
    title: "Інші...",
    icon: FaEllipsisH,
  },
];
