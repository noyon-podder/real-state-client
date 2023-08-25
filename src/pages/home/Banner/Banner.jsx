import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-image flex items-center px-20 justify-center">
      <div className="container mx-auto py-10 lg:px-20 px-5">
        <div className="text-center w-full">
          <h3 className="capitalize text-white text-3xl lg:text-5xl font-semibold text-center mb-4 lg:mb-8">
            Find your dream Home
          </h3>
          <p className="text-base-300 text-base">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className="lg:mt-10 mt-5">
          <div className=" gap-x-5 flex items-center justify-center mb-5 ">
            <button
              className="px-8 py-2 text-white bg-[#4A60A1]
            rounded"
            >
              Rent
            </button>
            <button
              className="px-8 py-2 text-[#4A60A1] bg-white
            rounded"
            >
              Sale
            </button>
          </div>
          <div className="px-6 py-3 bg-white rounded grid grid-cols-1 lg:grid-cols-4 lg:place-items-center gap-x-5 gap-y-5 mt-8">
            <div className="">
              <label
                htmlFor="location"
                className="text-[#4A60A1] text-lg font-semibold block mb-3"
              >
                Location
              </label>
              <select
                name=""
                id="location"
                className="text-gray-500 text-base outline-none"
              >
                <option className="text-gray-300">Select your city</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Khulna">Khulna</option>
                <option value="Jessore">Jessore</option>
                <option value="Mahakhali">Mahakhali</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="location"
                className="text-[#4A60A1] text-lg font-semibold block mb-3"
              >
                Property Type
              </label>
              <select
                name=""
                id="location"
                className="text-gray-500 text-base outline-none"
              >
                <option className="text-gray-300">
                  Select your property type
                </option>
                <option value="Kushtia">sell</option>
                <option value="Khulna">rent</option>
                <option value="Jessore">buy</option>
                <option value="Mahakhali">marketing</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="location"
                className="text-[#4A60A1] text-lg font-semibold block mb-3"
              >
                Rent Range
              </label>
              <select
                name=""
                id="location"
                className="text-gray-500 text-base outline-none"
              >
                <option className="text-gray-300">Select your city</option>
                <option value="Kushtia">1000-3000</option>
                <option value="Khulna">5000-7000</option>
                <option value="Jessore">8000-10000</option>
              </select>
            </div>
            <div className="w-full  text-center">
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
