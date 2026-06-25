const cafeList = [
	{
		name: "Cafe A",
		location: "123 Main St",
		rating: 4.5,
	},
	{
		name: "Cafe B",
		location: "456 Elm St",
		rating: 4.0,
	},
	{
		name: "Cafe C",
		location: "789 Oak St",
		rating: 4.8,
	},
];

// See ./CafeCard.js for the same explanation
// In this example, you are passing the cafeList array as a prop to the CafeList component
// When more cafes are added, the list will automatically replace your initial list with the updated list

// The reason why it didn't loop through your CafeCards was because you were setting them into the first index of your array (CafeCard line 18)
// This meant that only the first cafe was being displayed, and the rest were not doing anything
export default function CafeList({ cafes = cafeList }) {
	return (
		<div className="flex w-full flex-col gap-2">
			<ul>
				{cafes.map((cafe) => (
					<li
						key={cafe.name}
						className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/10"
					>
						<span className="text-xl font-bold">{cafe.name}</span>
						<span className="text-gray-600">{cafe.location}</span>
						<span
							className={`rounded-full px-2 py-0.5 text-xs font-semibold uppercase ${cafe.rating >= 4.5 ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
						>
							{cafe.rating} stars
						</span>
						<br />
					</li>
				))}
			</ul>
		</div>
	);
}
