const mockReviewList = [
	{
		cafe_id: 1,
		cafe_name: "Brew Haven",
		reviews: [
			{
				user_id: 1,
				rating: 5,
				text_review: "Great coffee and cozy atmosphere!",
			},
			{
				user_id: 2,
				rating: 4,
				text_review: "Nice place to work, but a bit noisy.",
			},
			{
				user_id: 3,
				rating: 3,
				text_review: "Average coffee, but friendly staff.",
			},
		],
	},
];

export function ReviewsCard({ reviewList = mockReviewList }) {
	// If you are looping thru a bunch of restaurants at the same time, this won't work as it only shows the first one
	// To fix this, you would need to loop through the reviewList and display each one separately
	const cafeReviews = reviewList[0];
	// Great use of your data to get new insights!
	const averageRating = cafeReviews.reviews.reduce((sum, review) => sum + review.rating, 0) / cafeReviews.reviews.length;
	return (
		<div className="w-full max-w-3xl mx-auto bg-white rounded-3xl border border-[#EEE7DA] shadow-sm p-5 space-y-4">
			<h2 className="text-2xl font-bold text-[#14345B]">{cafeReviews.cafe_name}</h2>
			{/* Dynamically generating stars for reviews! Nicely done :D */}
			<p className="text-md font-semibold text-[#14345B]">Average Rating: {"★".repeat(Math.floor(averageRating))}</p>
			<br />
			{cafeReviews.reviews.map((review) => {
				return (
					<div key={review.user_id} className="space-y-2 pb-4 border-b border-[#E9E3D8] last:border-b-0">
						<p className="text-[#14345B] text-sm mb-2">{"★".repeat(review.rating)}</p>
						<p className="text-gray-600 text-sm mb-2">{review.text_review}</p>
					</div>
				);
			})}
		</div>
	);
}
