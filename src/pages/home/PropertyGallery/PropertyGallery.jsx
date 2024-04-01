import SectionTitle from "../../../components/SetionTitle/SectionTitle";
import data from "../../../fakeData/propertiesByArea.json";
import { Link } from "react-router-dom";
const PropertyGallery = () => {
  console.log(data.property.slice(0, 3));

  const heading = <span className="text_span">Properties by area</span>;
  return (
    <section className="py-5 lg:py-20 container mx-auto px-5">
      <SectionTitle
        heading={heading}
        subHeading="Holisticly enhance team driven leadership skills via optimal human capital."
      ></SectionTitle>

      <div className="lg:px-28 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
          {data?.property.slice(0, 3)?.map((item) => (
            <div key={item.id}>
              <Link
                to={`/property`}
                className="w-full h-[238px] overlay relative card-image overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-full h-full rounded-md object-cover  duration-700"
                  />
                </div>

                <div className="absolute top-6 right-6 z-30 text-right">
                  <h2 className="text-white text-[20px] font-bold">
                    {item?.type}
                  </h2>
                  <p className="text-white text-base font-normal">
                    {item?.properties?.length} Listings
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4 gap-y-3 mt-5">
          {data?.property?.slice(3, 5)?.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  to={`/property`}
                  className="w-full h-[250px] overlay relative card-image overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item?.image}
                      alt=""
                      className="w-full h-[250px] rounded-md object-cover duration-700"
                    />
                  </div>

                  <div className="absolute top-6 right-6 z-30 text-right">
                    <h2 className="text-white text-[20px] font-bold">
                      {item?.type}
                    </h2>
                    <p className="text-white text-base font-normal">
                      {item?.properties?.length} Listings
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
