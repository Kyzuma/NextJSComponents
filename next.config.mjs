/** @type {import('next').NextConfig} */
const nextConfig = {
	/*
		When you use <Image /> from next/image with an external URL,
		Next.js protects your app by requiring you to explicitly
		whitelist any remote hostnames here.

		Without this config, <Image src="https://..." /> will throw
		an error in the browser — the image optimizer refuses to
		fetch from unknown domains.

		👉 Local images (imported from ./public/ or referenced as
		   "/filename.jpg") do NOT need this — they skip the
		   optimizer automatically if unoptimized.

		👉 Plain <img> tags work with any URL without this config,
		   but you lose automatic optimization, responsive sizing,
		   lazy loading, and caching.
	*/
	// Uncomment me!
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: "https",
	// 			hostname: "external-content.duckduckgo.com",
	// 		},
	// 		{
	// 			protocol: "https",
	// 			hostname: "encrypted-tbn0.gstatic.com",
	// 		},
	// 	],
	// },
	//
	// Question now for you, if I am just retrieving images from my Supabase Storage, what should i set my remotePatterns to?
};

export default nextConfig;
