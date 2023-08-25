import { FaBath, FaBed } from "react-icons/fa";
import { MdFavoriteBorder, MdTextFields } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import avatar from "../../assets/avatar.jpg";

const PropertyCard = ({ item }) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-sm border pb-3">
      <img
        className="object-cover w-full h-64"
        src={item.image}
        alt="Article"
      />

      <div className="px-4 py-6">
        <div>
          <h2 className="text-[#363A3D] text-base font-medium my-3">
            {item.title}
          </h2>
          <span className="text-blue-500 font-bold">${item.price}</span>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-x-4">
            <p className="flex items-center gap-x-2 mx-1 text-lg ">
              <FaBed className="text-xl text-gray-600" />{" "}
              <span className="text-gray-600">{item.bedrooms}</span>
            </p>
            <p className="flex items-center gap-x-2 mx-1 text-lg ">
              <FaBath className="text-xl text-gray-600" />{" "}
              <span className="text-gray-600">{item.bathrooms}</span>
            </p>
            <p className="flex items-center gap-x-2 mx-1 text-lg ">
              <MdTextFields className="text-xl text-gray-600" />{" "}
              <span className="text-gray-600">{item.area_sqft} ft</span>
            </p>
          </div>
        </div>

        <div className="mt-7 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={avatar}
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-[#363A3D] text-base ml-3 font-semibold">
              Jhon Doe
            </p>
          </div>

          <div className="flex items-center ">
            <span className="p-2 bg-blue-100 text-blue-500 cursor-pointer ml-2">
              <BsShareFill className="text-xl"></BsShareFill>
            </span>
            <span className="p-2 bg-blue-100 text-blue-500 cursor-pointer ml-2">
              <MdFavoriteBorder className="text-xl" />
            </span>
            <span className="p-2 bg-blue-100 text-blue-500 cursor-pointer ml-2">
              <AiOutlinePlus className="text-xl"></AiOutlinePlus>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
