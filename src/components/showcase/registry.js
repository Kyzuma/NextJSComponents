// The single source of truth for the showcase page.
//
// To add your own component:
//   1. Create a file in this folder, e.g. `MyThing.js`, with a default export.
//   2. Import it below and add one entry to the `showcase` array.
//   3. Save — it shows up on the page automatically.

import Button from "@/components/showcase/Button";
import Counter from "@/components/showcase/Counter";
import Greeting from "@/components/showcase/Greeting";
import Card from "@/components/showcase/Card";
import DataList from "@/components/showcase/DataList";
import KyCard from "@/components/showcase/KyCard";
import CafeCard from "@/components/showcase/CafeCard";
import CafeList from "@/components/showcase/CafeList";
import { ReviewsCard } from "@/components/showcase/ReviewsCard";
import PhotosCard from "@/components/showcase/PhotosCard";

export const showcase = [
	{
		name: "Button",
		description: "A reusable, clickable button.",
		Component: Button,
	},
	{
		name: "Counter",
		description: "Stateful component built FROM the Button component.",
		Component: Counter,
	},
	{
		name: "Greeting",
		description: "A component that takes a prop.",
		Component: () => <Greeting name="friend" />,
	},
	{
		name: "Card",
		description: "A static presentational component.",
		Component: Card,
	},
	{
		name: "KyCard",
		description: "Loops KyCard over an array of fruits with .map() (React's v-for).",
		Component: () => {
			const fruits = [
				{
					id: "banana",
					title: "Banana",
					bodyColor: "#fde047",
					topColor: "#a16207",
				},
				{
					id: "peach",
					title: "Peach",
					bodyColor: "#fca5a5",
					topColor: "#15803d",
				},
				{
					id: "grape",
					title: "Grape",
					bodyColor: "#c4b5fd",
					topColor: "#6d28d9",
				},
			];
			return (
				<div className="flex flex-col gap-3">
					{fruits.map((fruit) => (
						<KyCard key={fruit.id} {...fruit} />
					))}
				</div>
			);
		},
	},
	{
		name: "DataList",
		description: "Same component, two different lists passed in via the items prop.",
		Component: () => (
			<div className="flex w-full flex-col gap-4">
				<DataList />
				<DataList
					items={[
						{ id: "🍌", name: "Banana", color: "bg-yellow-400 text-black" },
						{ id: "🍎", name: "Apple", color: "bg-red-500 text-white" },
						{ id: "🍇", name: "Grape", color: "bg-purple-500 text-white" },
					]}
				/>
			</div>
		),
	},
	{
		name: "CafeCard",
		description: "A component for displaying cafe information.",
		Component: () => {
			// Moved the mock data here so it can be used in the CafeCard component
			const mockCafes = [
				{
					img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
					cafe: "Cafe name 1",
					address: "This is a simple presentational card built from plain HTML tags.",
					reviews: "5 stars",
					tags: ["cozy", "wifi", "outdoor seating"],
					priceRange: "$$",
					openingHours: "8:00 AM - 10:00 PM",
				},
				{
					img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
					cafe: "Cafe name 2",
					address: "address 2.",
					reviews: "3 stars",
					tags: ["indoors", "aesthetic", "desserts"],
					priceRange: "$$",
					openingHours: "8:00 AM - 10:00 PM",
				},
			];
			return (
				<div>
					<CafeCard
						img="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
						cafe="Example Cafe"
						address="123 Main St, Anytown, USA"
						reviews="4.5 stars"
						tags={["bright", "bread", "vietnamese"]}
						priceRange="$$"
					/>
					{/* Loop through the mockCafes and render a CafeCard for each one in the list*/}
					{/* Its better to loop through the mockCafes here than to hardcode them in the CafeCard components */}
					{mockCafes.map((cafe) => (
						// You can use the spread operator to pass all the props from the cafe object to the CafeCard component at once
						<CafeCard key={cafe.name} {...cafe} />
					))}
				</div>
			);
		},
	},
	{
		name: "CafeList",
		description: "A component for displaying a list of cafes.",
		Component: () => (
			<>
				{/* The reason why they are not counted as a single list is cause you are creating two seperate lists*/}
				<CafeList />
				<CafeList
					cafes={[
						{ name: "Cafe D", location: "999 Main St", rating: 4.5 },
						{ name: "Cafe E", location: "888 Elm St", rating: 4.0 },
						{ name: "Cafe F", location: "777 Oak St", rating: 4.8 },
					]}
				/>
			</>
		),
	},
	{
		name: "ReviewsCard",
		description: "A component for displaying a list of reviews.",
		Component: () => (
			<div className="w-full min-w-0 bg-white rounded-3xl border border-[#EEE7DA] shadow-sm p-5">
				<ReviewsCard
					reviewList={[
						{
							cafe_id: 1,
							cafe_name: "Cafe 2",
							reviews: [
								{
									user_id: 7,
									rating: 5,
									text_review: "Amazing ambiance and great coffee!",
								},
								{
									user_id: 8,
									rating: 4,
									text_review: "Good place to relax and read a book.",
								},
								{
									user_id: 3,
									rating: 3,
									text_review: "Average coffee, but friendly staff.",
								},
							],
						},
					]}
				/>
			</div>
		),
	},
	{
		name: "PhotosCard",
		description: "A component for displaying photos.",
		Component: () => (
			<div>
				<PhotosCard />
			</div>
		),
	},
];
