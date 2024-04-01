const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-7">
      <nav>
        <ul className="pagination flex gap-x-6 ">
          <li
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
            className={`pagination-item ${
              currentPage === 1
                ? "cursor-not-allowed px-2 py-1 bg-[#4A60A1] text-white rounded opacity-70"
                : "px-2 py-1 bg-[#4A60A1] text-white rounded cursor-pointer"
            }`}
          >
            Previous
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`pagination-item ${
                currentPage === i + 1
                  ? "w-7 h-7 rounded-full bg-[#4A60A1] text-white cursor-pointer flex items-center justify-center"
                  : "cursor-pointer text-gray-900 text-lg"
              }`}
            >
              {i + 1}
            </li>
          ))}
          <li
            onClick={() => {
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
            className={`pagination-item ${
              currentPage === totalPages
                ? "cursor-not-allowed px-2 py-1 bg-[#4A60A1] text-white rounded opacity-70"
                : "px-2 py-1 bg-[#4A60A1] text-white rounded cursor-pointer"
            }`}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
