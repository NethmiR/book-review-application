import React from "react";
import { FaBook } from "react-icons/fa";
import Button from "@/components/Button";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="m-4 pt-4 pb-1 px-4 border rounded-lg shadow-lg w-64">
      <FaBook className="text-4xl text-green mx-auto mb-4" />
      <h2 className="text-md text-center font-bold mb-2">{book.name}</h2>
      <p className="text-gray-700 mb-4 text-xs text-center">
        by {book.author.name}
      </p>
      <Link href={`/book/${book.id}`}>
        <Button caption="View Reviews" onClick={() => {}} width="w-full" />
      </Link>
    </div>
  );
};

export default BookCard;
