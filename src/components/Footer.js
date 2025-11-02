import { ReactComponent as Twitter } from "assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "assets/icons/linkedin.svg";
import { ReactComponent as Youtube } from "assets/icons/youtube.svg";
import { ReactComponent as Facebook } from "assets/icons/facebook.svg";
import { ReactComponent as Location } from "assets/icons/location-icon-2.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { ReactComponent as Phone } from "assets/icons/phone.svg";
import Logo from "assets/images/logo-main-2.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import Input from "./Inputs/Input";
import { useState } from "react";

const Footer = ({ submitEmail }) => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const submit = (e) => {
    setLoading(false);
  };

  const company = [
    {
      name: "About us",
      link: "/",
    },
    {
      name: "Become a Tutor",
      link: "/",
    },
    {
      name: "FAQs",
      link: "/#faq",
    },
  ];

  const myAccount = [
    {
      name: "Create Account",
      link: "/get-started",
    },
    {
      name: "Log into Account",
      link: "/get-started",
    },
  ];

  const legal = [
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] relative" style={{ width: "100%" }}>
      {/* Background image with opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          opacity: 0.08, // Adjust opacity as needed
        }}
      />
      <div className="relative z-10 max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
        <div className="lg:pt-[7rem] pt-[4rem] lg:grid block grid-cols-4">
          <div className="col-span-1">
            <img
              src={Logo}
              alt="logo"
              className="w-[9rem] lg:w-[10.5rem] cursor-pointer mb-6"
              onClick={() => {
                navigate("/");
              }}
            />
            <p className="font-aileron_sb text-[14px] text-white leading-[16px] pb-[0.5rem]">
              UK: Edsworth Limited
            </p>
            <p className="font-aileron_sb text-[14px] text-white leading-[16px]">
              NG: Edswot Consulting Limited
            </p>
            <div className="flex items-center gap-4 mt-[2rem]">
              <Twitter className="w-6" />
              <Youtube className="w-6" />
              <LinkedIn className="w-6" />
              <Instagram className="w-6" />
              <Facebook className="w-6" />
            </div>
          </div>
          {/* <hr className="lg:hidden block border border-t-0 border-b-1 border-b-neutral_stroke_1 my-[3rem]" /> */}

          <div className="col-span-3">
            <div>
              <h6 className="text-[22px] font-albra_sans_b mb-[5px] text-white">
                Stay Updated With Our Newsletter.
              </h6>
              <div className="flex gap-2 md:w-[50%] mb-[1rem]">
                <div className="basis-[60%]">
                  <Input
                    placeholder="Enter your email Address"
                    type="text"
                    id="lastName"
                    name="lastName"
                    readOnly={loading}
                    value={emailAddress}
                    onChange={handleChange}
                    showError={false}
                  />
                </div>
                <button
                  className="mt-[8px] text-white font-aileron_r text-14 px-8 rounded-[10px] border border-white w-fit h-[51px]"
                  onClick={() => submit()}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-full flex justify-between flex-wrap">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="mb-[3rem] basis-[50%] lg:basis-[22%]"
              >
                <h6 className="text-[18px] font-albra_sans_b mb-[15px] text-white">
                  Company
                </h6>
                {company.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-[14px] text-white font-aileron_r mb-[15px] cursor-pointer block"
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="mb-[3rem] basis-[50%] lg:basis-[22%]"
              >
                <h6 className="text-[18px] font-albra_sans_b mb-[15px] text-white">
                  My Account
                </h6>
                {myAccount.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-[14px] text-white font-aileron_r mb-[15px] cursor-pointer block"
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="mb-[3rem] basis-[50%] lg:basis-[22%]"
              >
                <h6 className="text-[18px] font-albra_sans_b mb-[15px] text-white">
                  Legal
                </h6>
                {legal.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-[14px] text-white font-aileron_r mb-[15px] cursor-pointer block"
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="lg:basis-[34%] mb-[3rem]"
              >
                <h6 className="text-[18px] text-white font-albra_sans_b mb-[15px]">
                  Get In Touch
                </h6>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Location />
                    <p className="text-white text-[14px] font-aileron_r">
                      71-75 Shelton Street, Covent Garden London. WC2H 9JQ
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Mail />
                    <p className="text-white text-[14px] font-aileron_r">
                      hello@edswot.com
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone />
                    <p className="text-white text-[14px] font-aileron_r">
                      +447367286107
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <hr className="border border-t-0 border-b-1 border-b-white w-full mb-[3rem] mt-[1.5rem]" />
        <p className="font-aileron_r text-[14px] text-white leading-[16px] pb-[4rem]">
          © {new Date().getFullYear()} Edswot also known as Edsworth Limited.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
