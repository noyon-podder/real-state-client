import { FaBath, FaBed } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdTextFields } from "react-icons/md";

const PropertyListCard = ({ item }) => {
  return (
    <div>
      <div className="flex max-w-full  overflow-hidden bg-white rounded-lg shadow-lg ">
        <div
          className="w-1/4 lg:min-w-[300px]  bg-cover"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        ></div>

        <div className="w-2/3 p-4 md:p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="block px-3 rounded-sm py-[2px] bg-[#FF5A5F] text-white text-[12px] font-medium">
              For Sale
            </span>
            <p className="text-lg text-primary font-bold">${item.price}</p>
          </div>
          <span className="text-[#ff5a5f] text-[12px] font-medium">
            Apartment
          </span>
          <h1 className="text-lg font-semibold text-gray-800 truncate pr-5">
            {item.title}
          </h1>

          <p className="mt-3 text-sm text-primary  flex items-center truncate gap-2">
            <IoLocationOutline />
            {item.location}
          </p>

          <div className="flex items-center gap-x-2 mt-3">
            <p className="flex items-center gap-x-2 mx-1 text-lg ">
              <FaBed className="text-base text-primary" />{" "}
              <span className="text-primary text-sm font-normal">
                {item.bedrooms}
              </span>
            </p>
            <p className="flex items-center gap-x-2 mx-1 text-lg ">
              <FaBath className="text-base text-primary" />{" "}
              <span className="text-primary text-sm font-normal">
                {item.bathrooms}
              </span>
            </p>
            <p className="flex items-center gap-x-2 mx-1 text-lg ">
              <MdTextFields className="text-base text-primary" />{" "}
              <span className="text-primary text-sm font-normal">
                {item.area_sqft} ft
              </span>
            </p>
          </div>

          <div className="flex justify-between mt-4 items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://www.demoapus-wp1.com/homeo/wp-content/uploads/2020/02/5.jpg"
                alt=""
                className="w-10 block h-10 rounded-full"
              />
              <p className="text-sm text-primary font-medium">Najmul Nobel</p>
            </div>
            <p className="m-0 text-sm text-primary font-normal">4 years ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListCard;
