import {
  FaFireBurner,
  FaPaintRoller,
  FaPlugCircleBolt,
  FaPrint,
  FaSnowplow,
  FaTruck,
  FaBath,
  FaFaucetDrip,
  FaBlender,
  FaCouch,
} from "react-icons/fa6";
import { FaCarCrash, FaSeedling, FaEllipsisH, FaTools } from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs";
import { IoTv } from "react-icons/io5";
import { RiFridgeFill } from "react-icons/ri";
import { PiHairDryerFill } from "react-icons/pi";
import {
  GiFruitTree,
  GiVacuumCleaner,
  GiBrickWall,
  GiBroom,
  GiMechanicGarage,
  GiTowTruck,
} from "react-icons/gi";

export const categoryHome = [
  {
    path: "building",
    title: "Будівельні роботи",
    icon: GiBrickWall,
  },
  {
    path: "repair",
    title: "Ремонт в будинку",
    icon: FaPaintRoller,
  },
  {
    path: "fix",
    title: "Мілкий ремонт в будинку",
    icon: FaTools,
  },
  {
    path: "furniture",
    title: "Виготовлення меблів",
    icon: FaCouch,
  },
  {
    path: "technics",
    title: "Ремонт побутової техніки",
    icon: FaBlender,
    // icon: PiHairDryerFill,
    // icon: GiVacuumCleaner,
    // icon: RiFridgeFill,
  },
  {
    path: "equipment",
    title: "Ремонт оргтехніки",
    icon: BsPrinterFill,
  },
  {
    path: "plumbing",
    title: "Роботи з водопроводом",
    icon: FaFaucetDrip,
  },
  {
    path: "heating",
    title: "Роботи з опаленням",
    icon: FaFireBurner,
  },
  {
    path: "electric",
    title: "Роботи з електрикою",
    icon: FaPlugCircleBolt,
  },
  {
    path: "cleaning",
    title: "Прибирання",
    icon: GiBroom,
  },
  {
    path: "car",
    title: "Ремонт автомобілів",
    icon: FaCarCrash,
  },
  {
    path: "tow",
    title: "Евакуатор",
    icon: GiTowTruck,
  },
  {
    path: "cargo",
    title: "Транспортування вантажів",
    icon: FaTruck,
  },
  {
    path: "ground",
    title: "Земельні роботи",
    icon: FaSnowplow,
  },
  {
    path: "planting",
    title: "Посадковий матеріал",
    icon: FaSeedling,
  },
  {
    path: "gardener",
    title: "Догляд за садом",
    icon: GiFruitTree,
  },
  {
    path: "other",
    title: "Інші...",
    icon: FaEllipsisH,
  },
];
