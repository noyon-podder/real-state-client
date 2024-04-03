import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdOutlineShareLocation } from "react-icons/md";
import Select from "react-select";

const MobileAdvancedSearch = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [advancedQuery, setAdvancedQuery] = useState(false);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch location data");
          }
          const data = await response.json();
          setLocation(data.display_name);
        } catch (error) {
          setError(error.message);
        }
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  const placeOptions = [
    { value: "rent", label: "Rent" },
    { value: "sale", label: "Sale" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FF5A5F" : "#fff",
      color: state.isSelected ? "#fff" : "#333",
      "&:hover": {
        backgroundColor: state.isSelected ? "#FF5A5F" : "#ff5a5f",
        color: state.isSelected ? "#fff" : "#fff",
      },
    }),
  };

  return (
    <div className=" p-5 pt-4 advanced-search">
      <h2 className="text-xl font-bold text-primary ">Advanced Search</h2>

      <div className="pt-7">
        <div className="w-full h-12 border relative rounded-md mb-6">
          <input
            type="text"
            placeholder="Keyword"
            className="w-full pl-3 pr-8 py-[10px] outline-none rounded-md"
          />
          <span className="absolute top-[50%] -translate-y-[50%] right-2">
            <GoSearch size={20} className="text-primary" />
          </span>
        </div>

        <div className="mb-6">
          <div className="w-full h-12 border relative rounded-md ">
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-3 pr-8 py-[10px] outline-none rounded-md"
              defaultValue={`${location}`}
            />

            <span
              className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
              onClick={getLocation}
            >
              <MdOutlineShareLocation size={20} className="text-primary" />
            </span>
          </div>
          <p className="text-red-500 text-sm font-semibold pl-3">{error}</p>
        </div>

        <div className="w-full  border rounded-mdb mb-6">
          <Select
            className=""
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeOptions}
            styles={customStyles}
            placeholder="Regions"
          />
        </div>

        <div className="w-full  border rounded-mdb mb-6">
          <Select
            className=""
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeOptions}
            styles={customStyles}
            placeholder="Status"
          />
        </div>
        <div className="w-full  border rounded-mdb mb-6">
          <Select
            className=""
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeOptions}
            styles={customStyles}
            placeholder="Beds"
          />
        </div>
        <div className="w-full  border rounded-mdb mb-6">
          <Select
            className=""
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeOptions}
            styles={customStyles}
            placeholder="Baths"
          />
        </div>
        <div className="w-full  border rounded-mdb mb-6">
          <Select
            className=""
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeOptions}
            styles={customStyles}
            placeholder="Garages"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base text-main font-semibold">Advanced</h2>
            <span
              className="text-lg text-main cursor-pointer"
              onClick={() => setAdvancedQuery(!advancedQuery)}
            >
              <FaInfoCircle />
            </span>
          </div>

          <div
            className={`grid grid-cols-2 mt-3 gap-y-4 gap-x-1 overflow-hidden duration-500 transition-height ${
              advancedQuery ? "max-h-auto " : "max-h-0 "
            }`}
          >
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Dryer
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Barbeque
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Air-Conditioning
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Gym
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Microwave
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Outdoor shower
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              TV Cable
            </label>
            <label className="flex items-center  gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              TV Cable
            </label>
            <label className="flex items-center  gap-3 cursor-pointer text-sm font-normal text-primary capitalize">
              <input type="checkbox" className="accent-main" />
              Washer
            </label>
          </div>
        </div>

        <div>
          <button className="py-2 bg-main text-white w-full border border-main hover:bg-transparent hover:text-main transition-all duration-300 rounded-md">
            {" "}
            Find Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAdvancedSearch;
