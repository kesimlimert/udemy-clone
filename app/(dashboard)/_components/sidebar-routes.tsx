"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
	{
		label: 'Dashboard',
		href: '/',
		icon: Layout,
	},
	{
		label: 'Browse',
		href: '/search',
		icon: Compass,
	},
];

export function SidebarRoutes() {
	const routes = guestRoutes;
	return (
		<div className="flex flex-col w-full">
			{routes.map((route) => (
				<SidebarItem
				  key={route.href}
				  label={route.label}
				  href={route.href}
				  icon={route.icon}
				/>
			))}
		</div>
	);
}