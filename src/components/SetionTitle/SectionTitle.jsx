const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h1 className="text_span mb-5">{heading}</h1>
      <p className="text-gray-500 text-base w-full lg:w-2/4 mx-auto">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
