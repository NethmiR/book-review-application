import React, { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TextBox from "@/components/TextBox";

/**
 * Pagination component renders pagination controls.
 *
 * @param {Object} props - The props for the Pagination component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {function} props.onPageChange - Callback function to handle page change.
 * @param {function} props.onJumpPageChange - Callback function to handle jump page change.
 * @param {string} props.jumpPage - The jump page value.
 * @param {function} props.handleJumpToPage - Callback function to handle jump to page.
 * @returns {JSX.Element} The rendered Pagination component.
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onJumpPageChange,
  jumpPage,
  handleJumpToPage,
}) => {
  useEffect(() => {
    onJumpPageChange(currentPage.toString());
  }, [currentPage, onJumpPageChange]);

  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-700">
        Showing page {currentPage} of {totalPages} pages
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-900 hover:text-gray-100 transition-all ease-in-out duration-300"
        >
          <FaAngleLeft />
        </button>
        <TextBox
          value={jumpPage}
          placeholder="Jump to page"
          onChange={onJumpPageChange}
          width="w-16"
          inputClassName="text-center"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleJumpToPage();
            }
          }}
        />
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-900 hover:text-gray-100 transition-all ease-in-out duration-300"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
