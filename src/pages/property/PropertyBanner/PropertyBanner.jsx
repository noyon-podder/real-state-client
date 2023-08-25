import { Link } from "react-router-dom";
import "./PropertyBanner.css";

const PropertyBanner = () => {
  return (
    <div className="property-banner flex items-center justify-center flex-col">
      <h2 className="text-white text-3xl ">Properties</h2>
      <div>
        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap mt-5">
          <Link to="/" className="text-gray-600 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>

          <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

          <a href="#" className="text-white">
            Properties
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
