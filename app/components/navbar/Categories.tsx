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
    description: "Esta priopiedad está cerca de la playa!",
  },
  {
    label: "Campo",
    icon: GiWindmill,
    description: "Esta priopiedad está un campo!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "Esta priopiedad es moderna!",
  },
  {
    label: "Montaña",
    icon: TbMountain,
    description: "Esta priopiedad está en la montaña",
  },
  {
    label: "Piletas",
    icon: TbPool,
    description: "Esta priopiedad tiene una pileta!",
  },
  {
    label: "Islas",
    icon: GiIsland,
    description: "Esta priopiedad está en una isla!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "Esta priopiedad está cerca de una lago!",
  },
  {
    label: "Esquí",
    icon: FaSkiing,
    description: "Esta priopiedad tiene actividades de esquí",
  },
  {
    label: "Castillos",
    icon: GiCastle,
    description: "Esta priopiedad está en un castillo!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Esta priopiedad tiene actividades de camping!",
  },
  {
    label: "Ártico",
    icon: BsSnow,
    description: "Esta priopiedad está en el ártico!",
  },
  {
    label: "Cueva",
    icon: GiCaveEntrance,
    description: "Esta priopiedad está en una cueva!",
  },
  {
    label: "Desierto",
    icon: GiCactus,
    description: "Esta priopiedad está en un desierto!",
  },
  {
    label: "Graneros",
    icon: GiBarn,
    description: "Esta priopiedad está en un granero!",
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
