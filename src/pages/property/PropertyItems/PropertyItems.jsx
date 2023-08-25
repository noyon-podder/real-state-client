import { useEffect, useState } from "react";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import Pagination from "../../../components/Pagination/Pagination";

const PropertyItems = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data to display for the current page
  const currentData = items.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {currentData.map((item, index) => (
          <PropertyCard key={index} item={item}></PropertyCard>
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={Math.ceil(items.length / itemsPerPage)}
        />
      </div>
    </div>
  );
};

export default PropertyItems;
