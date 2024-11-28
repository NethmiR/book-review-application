
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewCard = ({ review }) => {
    return (
        <div key={review.id} className="p-4 border rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
                <div className="flex justify-start items-center">
                    <p className="text-sm text-gray-500 mr-4">{review.user.name}</p>
                    <div className="py-1 px-4 rounded-full bg-light-green text-black text-xs">{review.status}</div>
                </div>
                <StarRatingComponent
                    name={`rating-${review.id}`}
                    value={review.rating}
                    starCount={5}
                    editing={false}
                    starColor="#ffb400"
                    emptyStarColor="#333"
                />
            </div>
            <p>{review.description}</p>
        </div>
    );
};

export default ReviewCard;