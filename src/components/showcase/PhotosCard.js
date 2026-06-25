"use client";
import { useState } from "react";
import Image from "next/image";

const mockImages = [
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
	"https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&w=800&q=80",
];

export default function PhotosCard({ images = mockImages }) {
	const [current, setCurrent] = useState(0);
	return (
		<div className="relative w-full max-w-xl">
			<h2 className="text-2xl font-bold text-[#14345B] mb-4">Cafe Photos</h2>
			{/* Remember to include alt prop in the img tag, alt text is important in the event the image fails to load */}
			<img src={images[current]} className="w-full h-auto rounded-lg" alt="Cafe photo" />
			{/*
				When setting an Image, use the Next.js Image component over the standard img tag
				Next.js Image gives us a few benefits over the standard img tag:
					1. Optimized image loading
					2. Responsive image sizing'
					3. Caching
					and many more!
			*/}
			{/* Upon uncommenting this example below, you will notice that there is an error, check ./next.config.mjs for details */}
			{/* <Image src={images[current]} className="w-full h-auto rounded-lg" width={500} height={500} alt="Cafe photo" />*/}

			{/*
				This is abit nitpicky on my end, but color selection is quite important as well
				In this case, since the background is white, we should set the text color to be something darker so it stands out against the white background
			*/}
			{current > 0 && (
				<button onClick={() => setCurrent(current - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 text-black">
					←
				</button>
			)}

			{current < images.length - 1 && (
				<button onClick={() => setCurrent(current + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 text-black">
					→
				</button>
			)}
		</div>
	);
}
