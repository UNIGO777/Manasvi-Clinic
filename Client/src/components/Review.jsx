import React from "react";
import paysent from "../assets/paysent.png";

const Reviews = [
  {
    name: "Pranjal",
    condition: "Mentally disabled",
    comment:
      "Within the lines of patient reviews, the silent voices of gratitude speak volumes about the quality of care and the dedication of healthcare providers.",
    rating: 5,
  },
  {
    name: "Tushar",
    condition: "Physically disabled",
    comment:
      "Within the lines of patient reviews, the silent voices of gratitude speak volumes about the quality of care and the dedication of healthcare providers.",
    rating: 4,
  },
  {
    name: "Vishal",
    condition: "Fever",
    comment:
      "Within the lines of patient reviews, the silent voices of gratitude speak volumes about the quality of care and the dedication of healthcare providers.",
    rating: 5,
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full mx-4 mb-6">
      <div className="flex flex-col items-start text-left"> {/* Align items to the left */}
        <img
          src={paysent}
          alt="avatar"
          className="h-24 rounded-full mb-4 self-start" // Align image to the left
        />
        <div className="text-blue-500 mb-2">
          {"★".repeat(review.rating)}{" "}
          <span className="text-gray-400">{"★".repeat(5 - review.rating)}</span>
        </div>
        <p className="text-gray-700 mb-2">{review.comment}</p>
        <h3 className="font-bold text-lg text-black lg:text-2xl">{review.name}</h3>
        <p className="text-sm mb-4 text-neutral-500 lg:text-lg  ">{review.condition}</p>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <section className="py-12 bg-gray-50">
        <p className="text-1xl font-NORMAL text-center mb-4 text-neutral-500">HAPPY PATIENT</p>
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        We believe in the
        <br />
         Patient's happiness.
      </h2>

      {/* Centering the grid of review cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
          {Reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
