import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
	return {
		...override,
		openGraph: {
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			url: "https://buttery-auth.com",
			images: "https://buttery-auth.com/og.png",
			siteName: "Buttery Auth",
			...override.openGraph,
		},
		twitter: {
			card: "summary_large_image",
			creator: "@ekjotsingh",
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			images: "https://buttery-auth.com/og.png",
			...override.twitter,
		},
	};
}

export const baseUrl =
	process.env.NODE_ENV === "development"
		? new URL("http://localhost:3000")
		: new URL(`https://${process.env.VERCEL_URL!}`);
