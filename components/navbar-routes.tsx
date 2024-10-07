"use client";

import { UserButton } from "@clerk/nextjs";

export function NavbarRoutes() {
	return (
		<div className="flex ml-auto gap-x-2">
			<UserButton />
		</div>
	);
}