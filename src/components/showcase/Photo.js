import Image from "next/image";
import cafe1 from "../../../public/cafe1.jpeg";

export default function Photo({
	link = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp15024290.jpg&f=1&nofb=1&ipt=48d1090486b4d2282be8d32a28fc7fb1fbff2f92d6d6e2a6a2c5a9df9b1bb8fb",
}) {
	return (
		<div>
			<img src={link} alt="Photo" />
			{/*
				When setting an Image, use the Next.js Image component over the standard img tag
				Next.js Image gives us a few benefits over the standard img tag:
					1. Optimized image loading
					2. Responsive image sizing
					3. Caching
				and many more!
			*/}
			{/*
				However, as discussed last week, Next.js Image often requires more configuration than the standard img tag.
				You must set width and height for the Image unless,
					1. The image is a statically imported (see example below)
					2. The image has a fill property
			*/}
			{/* You can comment the examples below to see the standard img tag in action */}
			{/* <Image src={cafe1} alt="Photo" />*/}
			{/* <Image src="/cafe2.jpeg" width={500} height={500} alt="Photo" />*/}
			{/* Upon uncommenting this example below, you will notice that there is an error, check ./next.config.mjs for details */}
			{/* <Image src={link} width={500} height={500} alt="Photo" />*/}
		</div>
	);
}
