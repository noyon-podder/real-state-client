import { IoGridOutline, IoListSharp, IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import PropertyGridCard from "../../../components/PropertyCard/PropertyGridCard";
import Pagination from "../../../components/Pagination/Pagination";
import PropertyListCard from "../../../components/PropertyCard/PropertyListCard";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import MobileAdvancedSearch from "../MobileAdvancedSearch/MobileAdvancedSearch";

const PropertyItems = () => {
  const itemsPerPage = 9;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridToggle, setGridToggle] = useState("grid");
  const [mobileAdvancedSearchShow, setMobileAdvancedSearchShow] =
    useState(false);

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

  const mobileSearchTrue = () => {
    setMobileAdvancedSearchShow(true);
    document.body.classList.add("overflow-hidden");
  };
  const mobileSearchFalse = () => {
    setMobileAdvancedSearchShow(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleOutsideClick = () => {
    setMobileAdvancedSearchShow(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="container mx-auto md:py-10 py-5">
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

      <div className="grid xl:grid-cols-10 lg:grid-cols-11 xl:gap-10 lg:gap-5 grid-cols-1">
        <div className="xl:col-span-7 lg:col-span-7">
          {gridToggle === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
              {currentData.map((item, index) => (
                <PropertyGridCard key={index} item={item}></PropertyGridCard>
              ))}
            </div>
          ) : (
            <div className="grid xl:grid-cols-1 grid-cols-1 gap-10">
              {currentData.map((item, index) => (
                <PropertyListCard key={index} item={item}></PropertyListCard>
              ))}
            </div>
          )}
        </div>
        <div className="xl:col-span-3 lg:col-span-4 hidden lg:block">
          <AdvancedSearch />
        </div>
      </div>

      <div className="z-50 relative">
        {/* mobile advanced search  start*/}
        {mobileAdvancedSearchShow === false && (
          <span
            className="w-9 h-9 rounded-[4px] bg-main text-white cursor-pointer text-2xl flex items-center justify-center lg:hidden fixed top-[50%] -translate-y-[50%] right-0 z-30"
            onClick={mobileSearchTrue}
          >
            <IoListSharp />
          </span>
        )}

        {mobileAdvancedSearchShow && (
          <div>
            <span
              className="w-9 h-9 rounded-s-[6px] bg-main text-white cursor-pointer text-2xl flex items-center justify-center lg:hidden fixed top-[50%] -translate-y-[50%] right-0 z-50"
              onClick={mobileSearchFalse}
            >
              <IoClose />
            </span>
            <div
              className="fixed top-0 left-0 bg-black w-full h-full opacity-60"
              onClick={handleOutsideClick}
            ></div>
            <div className="fixed top-0 left-0 h-screen overflow-y-auto max-w-[400px] z-50 bg-white transition-transform duration-300">
              <MobileAdvancedSearch />
            </div>
          </div>
        )}

        {/* mobile advanced search  end*/}
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
