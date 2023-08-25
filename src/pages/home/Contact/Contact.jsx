import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SetionTitle/SectionTitle";

const Contact = () => {
  return (
    <div className="bg-blue-100 py-10 px-3">
      <SectionTitle
        heading="Contact Us"
        subHeading="Completely formulate premium infrastructures and best-of-breed paradigms. Efficiently empower competitive quality vectors."
      />

      <div className="bg-base-100 py-5 px-5 w-full mt-5 rounded lg:w-2/4 mx-auto">
        <div>
          <h2 className="text-gray-700 font-bold text-xl mb-2">Enquiry form</h2>
          <p className="text-gray-400 text-base ">
            Are you looking for details about a certain property? Ask us a
            question using the form below.
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 mt-4">
            <input
              type="text"
              className="w-full border py-2 px-3 border-gray-300 rounded focus:border-blue-500 outline-none"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-full border py-2 px-3 border-gray-300 rounded focus:border-blue-500 outline-none"
              placeholder="Last name"
            />
          </div>
          <div className="my-4">
            <input
              type="email"
              className="w-full border py-2 px-3 focus:border-blue-500 outline-none border-gray-300 rounded"
              placeholder="Enter email ID"
            />
          </div>
          <div className="my-4">
            <textarea
              className="w-full border border-gray-300 rounded py-2 px-3 focus:border-blue-500 outline-none h-28 "
              placeholder="Enter email ID"
            ></textarea>
          </div>

          <Button value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
