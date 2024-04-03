import {
  IoGitCompareOutline,
  IoHeart,
  IoPrint,
  IoShareSocialOutline,
} from "react-icons/io5";
import data from "../../../fakeData/propertiesByArea.json";

const PropertyDetails = () => {
  console.log(data);
  return (
    <div className="container">
      <div className="flex md:pt-10 pt-5 lg:items-center justify-between flex-col md:flex-row gap-y-4">
        <div>
          <h2 className="md:text-[32px] text-[26px] font-bold text-primary ">
            Gorgeous Villa Bay{" "}
          </h2>
          <p className="text-base font-medium text-primary mt-1">
            325 E 84th St, New York
          </p>
        </div>
        <div className="flex items-center gap-6">
          <h2 className="text-primary lg:text-[28px] text-[24px] font-bold ">
            $800
          </h2>

          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-sm  cursor-pointer text-primary hover:bg-main hover:text-white duration-300  flex items-center justify-center">
              <IoGitCompareOutline size={20} />
            </span>

            <span className="w-8 h-8 rounded-sm  cursor-pointer  bg-main text-white duration-300  flex items-center justify-center">
              <IoHeart size={20} />
            </span>

            <span className="w-8 h-8 rounded-sm  cursor-pointer text-primary hover:bg-main hover:text-white duration-300  flex items-center justify-center">
              <IoShareSocialOutline size={20} />
            </span>

            <span className="w-8 h-8 rounded-sm  cursor-pointer text-primary hover:bg-main hover:text-white duration-300  flex items-center justify-center">
              <IoPrint size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
