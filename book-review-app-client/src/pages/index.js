import React, { useState, useEffect } from "react";
import VisitorLayout from "@/components/VisitorLayout";
import Toast from "@/components/Toast";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import BookCard from "@/components/BookCard"; // Import BookCard component
import { getAllBooks } from "@/services/bookService"; // Import getAllBooks function

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const fetchedBooks = await getAllBooks();
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VisitorLayout>
      <div className="flex flex-wrap justify-center">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Toast />
      <Spinner isVisible={loading} />
    </VisitorLayout>
  );
}
