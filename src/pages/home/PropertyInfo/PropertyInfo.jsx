import sellImage from "../../../assets/icon/sell.png";
import buyImage from "../../../assets/icon/buy.png";
import rentImage from "../../../assets/icon/rent.png";
import markettingImage from "../../../assets/icon/marketting.png";

import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SetionTitle/SectionTitle";

const PropertyInfo = () => {
  const heading = (
    <h2 className="text_span">
      Property By <span className="">Rent</span>
    </h2>
  );
  return (
    <div className=" py-10 px-5 lg:px-28 lg:py-20 border-t">
      <div className="container mx-auto">
        <SectionTitle
          heading={heading}
          subHeading="Progressively implement fully researched imperatives before ethical paradigms. Enthusiastically cultivate e-business networks and  economically sound."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 mt-10">
          <div className="bg-transparent border border-neutral-100 pl-4 pr-6 py-5 rounded shadow-sm">
            <img src={sellImage} alt="" />
            <h2 className="text-[#363A3D] font-semibold text-2xl  mt-3 mb-2">
              Sell your property
            </h2>
            <p className="text-gray-600 text-base mb-5 ">
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link className="text-base text-blue-500">Read more</Link>
          </div>

          <div className="bg-transparent border border-neutral-100 pl-4 pr-6 py-5 rounded shadow-sm">
            <img src={rentImage} alt="" />
            <h2 className="text-[#363A3D] font-semibold text-2xl  mt-3 mb-2">
              Rent your property
            </h2>
            <p className="text-gray-600 text-base mb-5 ">
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link className="text-base text-blue-500">Read more</Link>
          </div>

          <div className="bg-transparent border border-neutral-100 pl-4 pr-6 py-5 rounded shadow-sm">
            <img src={buyImage} alt="" />
            <h2 className="text-[#363A3D] font-semibold text-2xl  mt-3 mb-2">
              Buy a property
            </h2>
            <p className="text-gray-600 text-base mb-5 ">
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link className="text-base text-blue-500">Read more</Link>
          </div>

          <div className="bg-transparent border border-neutral-100 pl-4 pr-6 py-5 rounded shadow-sm">
            <img src={markettingImage} alt="" />
            <h2 className="text-[#363A3D] font-semibold text-2xl  mt-3 mb-2">
              Marketing your property
            </h2>
            <p className="text-gray-600 text-base mb-5 ">
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link className="text-base text-blue-500">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
