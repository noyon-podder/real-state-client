import SectionTitle from "../../../components/SetionTitle/SectionTitle";
import card1 from "../../../assets/Card 1.png";
import card2 from "../../../assets/Card 2.png";
import card3 from "../../../assets/Card 3.png";
import card4 from "../../../assets/Card 4.png";
import card5 from "../../../assets/Card 5.png";
const PropertyGallery = () => {
  return (
    <section className="py-5 lg:py-10 container mx-auto px-5">
      <SectionTitle
        heading="Properties by Area"
        subHeading="Holisticly enhance team driven leadership skills via optimal human capital."
      ></SectionTitle>

      <div className="lg:px-28 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4 gap-y-3 mt-5">
          <img src={card4} alt="" />
          <img src={card5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
