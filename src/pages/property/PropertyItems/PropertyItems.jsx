import { IoGridOutline, IoListSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import PropertyGridCard from "../../../components/PropertyCard/PropertyGridCard";
import Pagination from "../../../components/Pagination/Pagination";
import PropertyListCard from "../../../components/PropertyCard/PropertyListCard";

const PropertyItems = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridToggle, setGridToggle] = useState("grid");
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
      {/* property item header part start */}
      <div className="flex items-center justify-between lg:pb-10 pb-5">
        <div>
          <h2 className="font-bold text-[32px] text-primary mt-[8px]">
            Apartment
          </h2>
          <p className="text-base font-normal text-primary">
            Showing {currentData.length} Items
          </p>
        </div>

        {/* grid button */}
        <div className="md:flex items-center gap-4 hidden ">
          <span
            onClick={() => setGridToggle("grid")}
            className={`${
              gridToggle === "grid" ? "bg-[#e0dede]" : "bg-[#fff]"
            } w-12 h-[45px] cursor-pointer   flex items-center justify-center rounded-md`}
          >
            <IoGridOutline className="text-primary" size={28} />
          </span>
          <span
            onClick={() => setGridToggle("list")}
            className={`${
              gridToggle === "list" ? "bg-[#e0dede]" : "bg-[#fff]"
            } w-12 h-[45px] cursor-pointer   flex items-center justify-center rounded-md`}
          >
            <IoListSharp className="text-primary" size={28} />
          </span>
        </div>
      </div>
      {/* property item header part end */}

      <div className="grid xl:grid-cols-8 lg:grid-cols-9 xl:gap-10 lg:gap-5 grid-cols-1">
        <div className="xl:col-span-6 lg:col-span-6">
          {gridToggle === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
              {currentData.map((item, index) => (
                <PropertyGridCard key={index} item={item}></PropertyGridCard>
              ))}
            </div>
          ) : (
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
              {currentData.map((item, index) => (
                <PropertyListCard key={index} item={item}></PropertyListCard>
              ))}
            </div>
          )}
        </div>
        <div className="xl:col-span-2 lg:col-span-">Sidebar</div>
      </div>

      <div className={currentData?.length !== 0 ? "block" : "hidden"}>
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
