"use client";

import Link from "next/link";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategoryItemProps {
  label: string;
  icon?: IconType;
  value?: string;
}

export function CategoryItem({ label, icon: Icon, value }: CategoryItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
	const url = qs.stringifyUrl({
		url: pathname,
		query: {
			title: currentTitle,
			categoryId: isSelected ? undefined : value,
		},
	}, { skipNull: true, skipEmptyString: true });

	router.push(url);
  }

  return (
    <button
	  onClick={onClick}
      className={cn(
        "py-2 px-3 rounded-full border border-slate-200 flex items-center gap-x-1 hover:border-sky-700 transition",
        isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
      )}
    >
      {Icon && <Icon size={20} className="mr-2 h-4 w-4" />}
      <div className="truncate">{label}</div>
    </button>
  );
}
