import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/" },
    { name: "Properties", link: "/property" },
    { name: "Contact Us", link: "/" },
    { name: "Blog", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-base-100 py-4 border-b ">
      <div className=" container mx-auto md:flex md:justify-between bg-white px-6">
        <div>
          <Link className="flex items-center gap-3" to="/">
            <img src={logo} className="w-28" alt="" />
          </Link>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <HiMenuAlt1 />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-7 transition-all-duration-500 z-50 ease-in ${
            open ? "top-16 opacity-100 bg-white" : "top-[-490px]"
          } md:opacity-100 opacity-0 `}
        >
          {links.map((link) => (
            <li className="md:ml-8 text-base md:my-0 my-7" key={link.name}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#4A60A1] capitalize "
                    : "text-gray-800 hover:text-gray-400 capitalize duration-500 "
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
