import rentCard1 from "../../../assets/rent/Card 1.png";
import rentCard2 from "../../../assets/rent/Card 2.png";
import rentCard3 from "../../../assets/rent/Card 3.png";
import rentCard4 from "../../../assets/rent/Card 4.png";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SetionTitle/SectionTitle";
const LatestProperty = () => {
  return (
    <div className="container pb-10 mt-10 mx-auto px-3">
      <SectionTitle
        heading="Latest Property"
        subHeading="Dramatically drive cooperative strategic theme areas via timely applications. Conveniently benchmark timely web."
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 mt-5 lg:mt-10 mb-7">
        <img src={rentCard1} alt="Latest Property" />
        <img src={rentCard2} alt="Latest Property" />
        <img src={rentCard3} alt="Latest Property" />
        <img src={rentCard4} alt="Latest Property" />
      </div>
      <Button value="Load more property" />
    </div>
  );
};

export default LatestProperty;
