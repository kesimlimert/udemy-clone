import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export default async function Courses() {

	const { userId } = auth();
	if (!userId) {
		return redirect("/sign-in");
	}

	const courses = await db.course.findMany({
		where: {
			userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return (
		<div className="p-6">
			<DataTable columns={columns} data={courses} />
		</div>
	);
}