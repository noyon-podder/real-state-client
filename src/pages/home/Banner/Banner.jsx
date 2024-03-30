import { useState } from "react";
import "./Banner.css";
import Select from "react-select";

const Banner = () => {
  const options = [
    { value: "rent", label: "Rent" },
    { value: "sale", label: "Sale" },
  ];

  const propertyTypeOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "Houses", label: "Houses" },
    { value: "rent", label: "Rent" },
    { value: "office", label: "Office" },
    { value: "townHome", label: "TownHome" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="banner-image flex items-center px-20 justify-center">
      <div className="container mx-auto py-10 lg:px-20 px-5">
        <div className="text-center w-full">
          <h3 className="capitalize text-white text-4xl lg:text-7xl font-bold text-center mb-4 lg:mb-8">
            Find your <span className="">dream</span> Home
          </h3>
          <p className="text-base-300 text-base">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className="lg:mt-10 mt-5">
          <div className="flex bg-white gap-2 lg:items-end items-center lg:flex-row flex-col rounded-md">
            <div className="w-full">
              <div className="px-6 py-8  grid grid-cols-1 lg:grid-cols-5 lg:place-items-end gap-x-5 gap-y-5 ">
                <div className="lg:w-full  lg:col-span-1">
                  <label
                    htmlFor="location"
                    className="text-[#4A60A1] text-lg font-semibold block mb-3"
                  >
                    Type
                  </label>
                  <div className="">
                    <Select
                      className=""
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>
                <div className="lg:col-span-1 lg:w-full">
                  <label
                    htmlFor="property"
                    className="text-[#4A60A1] text-lg font-semibold block mb-3"
                  >
                    Property Type
                  </label>
                  <Select
                    className=""
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={propertyTypeOptions}
                  />
                </div>
                <div className="w-full lg:col-span-3 md:col-span-2">
                  <label
                    htmlFor="location"
                    className="text-[#4A60A1] text-lg font-semibold block mb-3"
                  >
                    Rent Range
                  </label>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-[#eaeaea] w-full px-3 h-[38px] rounded-[4px] outline-none focus:border-[#4a60a1c5]"
                  />
                </div>
              </div>
            </div>

            {/* search button  */}
            <div className="text-center pb-8 px-3">
              <button
                className="px-8 py-2 text-white bg-[#4A60A1]
            rounded "
              >
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
