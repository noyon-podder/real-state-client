import {
  IoGitCompareOutline,
  IoHeart,
  IoHeartOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaBath, FaBed } from "react-icons/fa";
import { MdTextFields } from "react-icons/md";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PropertyCard = ({ item }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Check if the item exists in the wishlist in localStorage
    const existingWishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(existingWishlistItems.includes(item.id));
  }, [item]);

  const toggleWishlist = () => {
    // Toggle adding/removing item to/from wishlist in localStorage
    const existingWishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isInWishlist) {
      const updatedWishlistItems = existingWishlistItems.filter(
        (id) => id !== item.id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItems));
      toast.success("Wishlist Remove");
    } else {
      localStorage.setItem(
        "wishlist",
        JSON.stringify([...existingWishlistItems, item.id])
      );
      toast.success("Wishlist Add");
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-sm border pb-3 group">
      <div className="relative overlay-card">
        <img
          className="object-cover w-full h-64"
          src={item.image}
          alt="Article"
        />
        <div className="absolute bottom-5 right-5 flex items-center gap-3 z-50">
          <>
            <span
              className={`${
                !isInWishlist ? "bg-black bg-opacity-40" : "bg-main"
              } w-8 h-8 rounded-md  cursor-pointer flex items-center justify-center`}
              onClick={toggleWishlist}
            >
              {isInWishlist ? (
                <IoHeart className="text-white" size={20} />
              ) : (
                <IoHeartOutline color="#fff" size={20} />
              )}
            </span>
          </>
          <span className="w-8 h-8 rounded-sm bg-black cursor-pointer bg-opacity-50 flex items-center justify-center">
            <IoGitCompareOutline size={20} color="#fff" />
          </span>
        </div>
        <div className="absolute top-4 left-4 z-50">
          <span className="block px-3 rounded-sm py-[2px] bg-[#FF5A5F] text-white text-[12px] font-medium">
            For Sale
          </span>
        </div>

        <div className="absolute bottom-5 left-5 z-50">
          <span className="text-[#fff]  font-bold">${item.price}</span>
        </div>
      </div>

      <div className="px-4 pt-2">
        <div>
          <Link
            to={`/property-details/:id`}
            className="text-[#363A3D] text-base text-[18px] font-semibold my-3 block group-hover:text-[#FF5A5F]"
          >
            {item.title}
          </Link>
        </div>
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

        <div className="flex justify-between border-t mt-4 pt-3 items-center">
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
  );
};

export default PropertyCard;
