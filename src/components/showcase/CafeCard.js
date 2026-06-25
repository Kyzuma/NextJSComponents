// Going off my own assumption, I assume you want to loop through the mockCafes array and render a CafeCard for each item.
// Declaring the list of cafes in the components itself is normally not recommended, as it couples the component logic to the data

// Moving this to ./registry.js
// const mockCafes = [
// 	{
// 		img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
// 		cafe: "Cafe name",
// 		address: "This is a simple presentational card built from plain HTML tags.",
// 		reviews: "5 stars",
// 		tags: ["cozy", "wifi", "outdoor seating"],
// 		priceRange: "$$",
// 		openingHours: "8:00 AM - 10:00 PM",
// 	},
// 	{
// 		img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
// 		cafe: "Cafe name",
// 		address: "address 2.",
// 		reviews: "3 stars",
// 		tags: ["indoors", "aesthetic", "desserts"],
// 		priceRange: "$$",
// 		openingHours: "8:00 AM - 10:00 PM",
// 	},
// ];

// How I would do this is
export default function CafeCard({
	// cafes = mockCafes
	// Declare the props needed for the card here, you can set a default value if needed or leave it blank
	img,
	cafe,
	address,
	reviews,
	tags,
	priceRange = "$$$",
	openingHours,
}) {
	// const { img, cafe, address, reviews, tags, priceRange, openingHours } = cafes[0];
	return (
		<div>
			{/* Refer to ../PhotosCard.js for details on the Image component */}
			<img src={img} alt={cafe} />
			<h2 className="text-lg font-bold">{cafe}</h2>
			<p className="text-gray-600">{address}</p>
			<p className="text-sm text-gray-500">{reviews}</p>
			<p className="text-sm text-gray-500">{priceRange}</p>
			<p className="text-sm text-gray-500">{openingHours}</p>
			<div className="flex gap-2">
				{tags.map((tag) => {
					return (
						// Good use of map to render the tags as a list of <p> elements
						// I would increase the padding (px-number, py-number) of the tags to make them more visually appealing
						// I would also set margin (mx-number, my-number, mt-number, mb-number) to add spacing between the tags
						// If you are abit confused about the px, py etc, you can think of it as this
						// px = padding on the x-axis, py = padding on the y-axis, pt = padding on the top, pb = padding on the bottom (the same works for margin as well!)
						<p key={tag} className="bg-[#14345B] text-white font-semibold px-4 py-3 mb-2 text-xs rounded-full">
							{tag}
						</p>
					);
				})}
			</div>
			<div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#F7F5F1] text-[#1D2D44] font-semibold text-sm">saved</div>
		</div>
	);
}
