import React, { useCallback, useState } from "react";
import Logo from "assets/images/logo-main.webp";
import { ReactComponent as DarkHamburger } from "assets/icons/hamburger-black.svg";
import Button from "./Inputs/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useModal } from "layouts/MainLayout";
import { motion } from "framer-motion";
import BookClassModal from "./Modal/BookClassModal";
// import { fadeIn } from "variants.js";

const Header = () => {
  const [showBookClassForm, setShowBookClassForm] = useState(false);
  const { toggleMenu } = useModal();
  const menuOptions = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "#courses",
    },
    {
      name: "Tutors",
      link: "#tutors",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Determine if a menu item is active
  const isActive = useCallback(
    (item) => {
      // Normalize both to lowercase and check if pathname starts with the link
      // or includes the link (for subroutes)
      if (!item?.link) return false;
      // Exact match or subroute match
      return (
        pathname.toLowerCase() === item.link.toLowerCase() ||
        pathname.toLowerCase().startsWith(item.link.toLowerCase() + "/")
      );
    },
    [pathname]
  );


  return (
    <motion.div
      // variants={fadeIn("up", 0.2)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: true, amount: 0.7 }}
      className="absolute w-full py-[20px] border-b border-brand_primary"
    >
      <div
        className={`flex justify-between items-center h-[40px] lg:h-[50px] max-w-[1300px] lg:w-[95%] w-[90%] 2xl:w-full m-auto rounded-[50px]`}
      >
        <img
          src={Logo}
          alt="logo"
          className="w-[3.5rem] lg:w-[4rem] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="hidden lg:flex items-center gap-8">
          {menuOptions.map((item, index) => {
            const active = isActive(item);
            return (
              <a
                key={index}
                href={item.link}
                className={`cursor-pointer font-aileron_r text-14 pb-[5px] text-black transition-all duration-150
                  ${
                    active
                      ? "border-b-[1.5px] border-brand_secondary font-bold text-brand_secondary"
                      : "border-b-[1.5px] border-transparent"
                  }
                  hover:border-brand_primary transition-colors duration-500 px-1 py-1 pt-2
                `}
                // onClick={e => {
                //   // Prevent full page reload and use react-router navigation
                //   e.preventDefault();
                //   navigate(item.link);
                // }}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Button
            name={"Book a Free Trial Class"}
            theme={"transparent"}
            textClassName="sm:text-14"
            className="4xs:w-auto"
            onClick={() => setShowBookClassForm(true)}
          />
          <Button
            name={"Log in"}
            theme={"primary"}
            onClick={() => {
              navigate("/get-started");
            }}
          />
        </div>
        <div className="lg:hidden">
          <DarkHamburger onClick={() => toggleMenu()} />
        </div>
      </div>
      {showBookClassForm && (
        <BookClassModal onClose={() => setShowBookClassForm(false)} />
      )}
    </motion.div>
  );
};

export default Header;
