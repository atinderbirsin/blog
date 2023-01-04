import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar({ links }) {
  const classes = `bg-[#333333] p-1 cursor-pointer text-lg font-bold text-white px-3 py-6 flex items-center justify-between`;
  const listResponsiveVeiwClasses = `max-sm:translate-x-full max-sm:absolute max-sm:bg-[#333333] max-sm:items-center max-sm:gap-0 max-sm:py-4 max-sm:flex-col max-sm:top-[64px] max-sm:right-0 max-sm:w-screen transition duration-1000 ease-in-out`;
  const linkResponsiveVeiwClasses = `p-1 max-sm:hover:bg-white max-sm:w-full max-sm:cursor-pointer max-sm:text-center max-sm:p-2 transition duration-500 ease-in-out max-sm:hover:text-black`;
  const iconClasses = `sm:hidden border rounded-sm text-2xl tarnsition duration-500 ease-in-out`;
  const ref = useRef();

  const [click, setClick] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");

    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  const handleIconClick = () => {
      ref.current.classList.toggle("max-sm:translate-x-full");
    setClick(!click);
  };

  const icon = click ? <AiOutlineClose /> : <HiBars3 />;

  const renderedNavLinks = links.map((link, index) => {
    return (
      <li
        key={index}
        className={`hover:text-[#000000] hover:bg-[#ffffff] ${linkResponsiveVeiwClasses}`}
        onClick={handleIconClick}
      >
        <Link to={link.to} className="block">
          {link.label}
        </Link>
      </li>
    );
  });

  return (
    <div className={classes}>
      <div>
        <Link className="flex items-center">
          <FaBlog />
          log
        </Link>
      </div>
      <div>
        <ul ref={ref} className={`flex gap-3 ${listResponsiveVeiwClasses}`}>
          {renderedNavLinks}
        </ul>
        <div className={iconClasses} onClick={handleIconClick}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
