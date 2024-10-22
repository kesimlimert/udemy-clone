"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMusic,
  FcOldTimeCamera,
  FcSportsMode,
  FcMultipleDevices,
  FcSalesPerformance,
  FcReadingEbook,
  FcCloseUpMode,
} from "react-icons/fc";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Engineering": FcEngineering,
  "Filming": FcFilmReel,
  "Music": FcMusic,
  "Photography": FcOldTimeCamera,
  "Fitness": FcSportsMode,
  "Food & Drink": FcMultipleDevices,
  "Accounting": FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  "Language": FcReadingEbook,
  "Art": FcCloseUpMode,
};

export function Categories({ items }: CategoriesProps) {
  return (
	<div className="flex items-center gap-x-2 overflow-x-auto pb-2">
		{items.map((item) => (
			<CategoryItem 
				key={item.id}
				label={item.name}
				icon={iconMap[item.name]}
				value={item.id}
			/>
		))}
	</div>
  );
}

