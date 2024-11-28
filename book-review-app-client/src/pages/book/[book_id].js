import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import VisitorLayout from "@/components/VisitorLayout";
import Toast from "@/components/Toast";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import TextArea from "@/components/TextArea";
import StarRatingComponent from 'react-star-rating-component';
import { toast } from "react-toastify";
import { getBookReviews } from "@/services/bookService";
import { useUser } from "@/contexts/userContext";
import { createReview } from "@/services/reviewService";

const BookDetails = () => {
    const router = useRouter();
    const { book_id } = router.query;
    const [loading, setLoading] = useState(false);

    const [book, setBook] = useState({
        "id": 0,
        "name": "",
        "author_id": 0,
        "createdAt": "",
        "updatedAt": "",
        "author": {
            "id": 1,
            "name": "",
            "createdAt": "",
            "updatedAt": ""
        }
    });
    const [reviews, setReviews] = useState([]);

    const [addReviewSelected, setAddReviewSelected] = useState(false);
    const [newReviewDescription, setNewReviewDescription] = useState("");
    const [newReviewRating, setNewReviewRating] = useState(0);

    const { user } = useUser();

    const submitReview = async () => {
        if (setNewReviewDescription == "") {
            toast.error("Please enter a review description");
        }

        const reviewObject = {
            description: newReviewDescription,
            rating: newReviewRating,
            book_id: book.id,
            userId: user.id
        }

        try {
            setLoading(true);
            const response = await createReview(reviewObject);
            toast.success("Review added successfully");

            fetchBookDetails();
            setAddReviewSelected(false);
            setNewReviewDescription("");
            setNewReviewRating(0);
        } catch (error) {
            console.error("Error adding review:", error);
            toast.error("Error adding review. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (book_id) {
            fetchBookDetails();
        }
    }, [book_id]);

    const fetchBookDetails = async () => {
        try {
            setLoading(true);
            const response = await getBookReviews(book_id);
            const bookData = response.bookDetails;
            const bookReviews = bookData.reviews;
            setBook(bookData);
            setReviews(bookReviews);
        } catch (error) {
            console.error("Error fetching book details:", error);
            router.push("/404");
        } finally {
            setLoading(false);
        }
    };

    return (
        <VisitorLayout>
            <div className="container mx-auto py-8">
                <h1 className="text-lg font-bold mb-2 text-green">{book.name}</h1>
                <p className="text-md mb-2">Author: {book.author.name}</p>
                <hr className="my-4" />
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold mb-2">Reviews</h2>
                    <Button caption="Add Review" onClick={() => {
                        if (user) {
                            setAddReviewSelected(true);
                        } else {
                            toast.warning("Please sign in to add a review.");
                        }
                    }} />
                </div>

                {addReviewSelected && (
                    <div className="pt-2 pb-4 px-4 border rounded-lg shadow-md mb-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold mb-2">Add Review</h3>
                            <Button caption="Cancel" onClick={() => setAddReviewSelected(false)} background={'bg-red'} />
                        </div>
                        <div className="flex flex-col justify-center items-center mb-2">
                            <StarRatingComponent
                                name={`rating-new`}
                                value={newReviewRating}
                                starCount={5}
                                editing={true}
                                starColor="#ffb400"
                                emptyStarColor="#333"
                                onStarClick={(nextValue) => setNewReviewRating(nextValue)}
                            />
                            <TextArea value={newReviewDescription} onChange={setNewReviewDescription} placeholder="Enter review text..." rows={4} containerClassName={'mt-4'} />
                            <Button caption="Submit Review" onClick={() => submitReview()} />
                        </div>
                    </div>
                )}
                {reviews.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                ) : (
                    <p>No reviews available for this book.</p>
                )}
            </div>
            <Toast />
            <Spinner isVisible={loading} />
        </VisitorLayout>
    );
};

export default BookDetails;
