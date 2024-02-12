"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

import Container from "../Container";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Playa",
    icon: TbBeach,
    description: "Esta priopiedad esta cerca de la playa!",
  },
  {
    label: "Molinos",
    icon: GiWindmill,
    description: "Esta priopiedad tiene molinos de viento!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "Esta priopiedad es moderna!",
  },
  {
    label: "Campo",
    icon: TbMountain,
    description: "Esta priopiedad es en el campo!",
  },
  {
    label: "Piletas",
    icon: TbPool,
    description: "Esta priopiedad tiene una pileta!",
  },
  {
    label: "Islas",
    icon: GiIsland,
    description: "Esta priopiedad esta en una isla!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "Esta priopiedad esta cerca de una lago!",
  },
  {
    label: "Esquiar",
    icon: FaSkiing,
    description: "Esta priopiedad tiene actividades de esquí",
  },
  {
    label: "Castillos",
    icon: GiCastle,
    description: "Esta priopiedad esta en un castillo!",
  },
  {
    label: "Acampar",
    icon: GiForestCamp,
    description: "Esta priopiedad tiene actividades de acampar!",
  },
  {
    label: "Ártico",
    icon: BsSnow,
    description: "Esta priopiedad esta en el ártico!",
  },
  {
    label: "Cueva",
    icon: GiCaveEntrance,
    description: "Esta priopiedad esta en una cueva!",
  },
  {
    label: "Desierto",
    icon: GiCactus,
    description: "Esta priopiedad esta en un desierto!",
  },
  {
    label: "Graneros",
    icon: GiBarn,
    description: "Esta priopiedad esta en un granero!",
  },
  {
    label: "Lujoso",
    icon: IoDiamond,
    description: "Esta priopiedad es lujosa!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
