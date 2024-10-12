import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = () => {
	const { userId } = auth();
	if (!userId) throw new UploadThingError("Unauthorized");
	return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
  .middleware(async ({ req }) => {
	// This code runs on your server before upload
	console.log("Middleware for imageUploader");
	handleAuth();
	return {}; // Return an empty object if no metadata is needed
	})
	.onUploadComplete(async ({ metadata, file }) => {
	console.log("Upload completed:", file.url);
	return { fileUrl: file.url };
	}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
  .middleware(async ({ req }) => {
	// This code runs on your server before upload
	console.log("Middleware for imageUploader");
	handleAuth();
	return {}; // Return an empty object if no metadata is needed
	})
	.onUploadComplete(async ({ metadata, file }) => {
	console.log("Upload completed:", file.url);
	return { fileUrl: file.url };
	}),
  chapterVideo: f({ video: { maxFileSize: "512GB", maxFileCount: 1 } })
  .middleware(async ({ req }) => {
	// This code runs on your server before upload
	console.log("Middleware for imageUploader");
	handleAuth();
	return {}; // Return an empty object if no metadata is needed
	})
	.onUploadComplete(async ({ metadata, file }) => {
	console.log("Upload completed:", file.url);
	return { fileUrl: file.url };
	}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
