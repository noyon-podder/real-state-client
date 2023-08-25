import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import LatestProperty from "../LatestProperty/LatestProperty";
import PropertyGallery from "../PropertyGallery/PropertyGallery";
import PropertyInfo from "../PropertyInfo/PropertyInfo";
import PropertyRent from "../PropertyRent/PropertyRent";

const Home = () => {
  return (
    <>
      <Banner />
      <PropertyGallery />
      <PropertyInfo />
      <PropertyRent />
      <LatestProperty />
      <Contact />
    </>
  );
};

export default Home;
