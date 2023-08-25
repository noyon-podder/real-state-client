import logo from "../../../assets/Logo.png";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const getyear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-white py-10">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                  <img className="w-24 " src={logo} alt="" />
                </a>

                <h3 className="text-gray-900 font-semibold text-xl mt-4 mb-2">
                  Contact Us{" "}
                </h3>
                <span className="text-base text-gray-500 my-2">
                  call: +880 1752441505
                </span>

                <h6 className="text-lg my-3 text-gray-800 font-semibold">
                  Email: noyon.podder7@gmail.com
                </h6>

                <div className="flex mt-6 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 text-2xl transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Reddit"
                  >
                    <FaFacebookSquare />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 text-2xl transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Facebook"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-2xl text-gray-600 transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Github"
                  >
                    <FaDiscord />
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-2xl text-gray-600 transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Github"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold mb-4  uppercase ">
                    About
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    community
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Careers
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-900 text-xl font-bold mb-4  uppercase ">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Tec
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Music
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Videos
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-900 text-xl font-bold mb-4  uppercase ">
                    Products
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Mega cloud
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Aperion UI
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Meraki UI
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold mb-4  uppercase text-xl">
                    Term of service
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600  hover:underline">
                    privacy policy
                  </span>
                  <span className="block mt-2 text-sm text-gray-600  hover:underline">
                    security
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none " />

          <div>
            <p className="text-center text-gray-500 ">
              © Brand {getyear} - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
