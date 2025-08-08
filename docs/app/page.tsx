import Section from "@/components/landing/section";
import Hero from "@/components/landing/hero";
import Features from "@/components/features";
import Link from "next/link";

async function getGitHubStars() {
	try {
		const response = await fetch(
			"https://api.github.com/repos/buttery-auth/buttery-auth",
			{
				next: {
					revalidate: 60,
				},
			},
		);
		if (!response?.ok) {
			return null;
		}
		const json = await response.json();
		const stars = parseInt(json.stargazers_count).toLocaleString();
		return stars;
	} catch {
		return null;
	}
}

export default async function HomePage() {
	const stars = await getGitHubStars();
	return (
		<main className="h-min mx-auto overflow-x-hidden">
			<div className="w-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950 border-b border-dashed border-zinc-200 dark:border-zinc-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="w-full h-full">
						<div className="flex flex-col md:flex-row items-center justify-center h-12">
						</div>
					</div>
				</div>
			</div>
			<Section
				className="mb-1 overflow-y-clip"
				crosses
				crossesOffset="lg:translate-y-[5.25rem]"
				customPaddings
				id="hero"
			>
				<Hero />
				<Features stars={stars} />
				<hr className="h-px bg-gray-200" />
			</Section>
		</main>
	);
}
