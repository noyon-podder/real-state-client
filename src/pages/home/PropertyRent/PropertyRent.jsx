import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SetionTitle/SectionTitle";

import PropertyCard from "../../../components/PropertyCard/PropertyGridCard";
import Button from "../../../components/Button/Button";

const PropertyRent = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProperty(data.slice(0, 4)));
  }, []);
  return (
    <div className="container mx-auto px-3 py-10 lg:py-16">
      <SectionTitle
        heading="Latest Properties of Rent"
        subHeading="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4 lg:mt-10 mt-5 mb-8">
        {property.map((item, index) => (
          <PropertyCard key={index} item={item}></PropertyCard>
        ))}
      </div>
      <Button value="Load more listing" />
    </div>
  );
};

export default PropertyRent;
