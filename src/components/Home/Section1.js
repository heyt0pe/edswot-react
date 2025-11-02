import Section1Img from "assets/images/home-sec-1.webp";
// import Section1BG from "assets/images/home-sec-1-bg.webp";
import { ReactComponent as Users } from "assets/icons/users.svg";
import { ReactComponent as GoldStar } from "assets/icons/gold-star.svg";
import { ReactComponent as GoldCup } from "assets/icons/gold-cup.svg";
import { ReactComponent as RolledScroll } from "assets/icons/rolled-scroll.svg";
import { ReactComponent as GraduationCap } from "assets/icons/graduation-cap.svg";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import CustomHeading from "components/CustomHeading";

const Section1 = ({ triggerBookClassForm }) => {
  const navigate = useNavigate();
  // const isMobile = window.innerWidth < 768;

  return (
    <div
      className=""
      // style={{
      //   width: "100%",
      //   backgroundImage: `url(${Section1BG})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lgm:pt-[13rem] pt-[9rem] pb-[6rem] grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="md:w-[90%] lg:w-[90%]">
          <CustomHeading
            text={"Welcome to ED Swot"}
            variants={fadeIn("up", 0.2)}
          />
          <motion.h1
            className="mt-4 font-albra_sans_b text-[43px] md:text-[42px] lgm:text-[65px] md:leading-[50px] lg:leading-[60px] lgm:leading-[70px] leading-[54px] mb-4"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Transform Your{" "}
            <span className="font_outline_2 italic font-albra_sans_b text-[43px] md:text-[42px] lgm:text-[65px] bg-gradient-to-br from-brand_primary to-dark_brand_primary text-transparent bg-clip-text">
              Learning:
            </span>{" "}
            Take Classes{" "}
            <span className="font_outline_2 italic font-albra_sans_b text-[43px] md:text-[42px] lgm:text-[65px] bg-gradient-to-br from-brand_primary to-dark_brand_primary text-transparent bg-clip-text">
              Anywhere!
            </span>
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-16 text-14 leading-[24px] mb-6 lg:w-[100%]"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Join live, expert-led classes in Academics, Languages, Coding &
            more—no commute, stay ahead and just real results.
          </motion.p>
          <motion.div
            className="xs:flex sm:gap-4 gap-2"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button
              name={"Get Started"}
              theme={"primary"}
              textClassName="sm:text-14"
              className="!w-[130px] xs:w-auto sm:mb-6 mb-2"
              onClick={() => navigate("/get-started")}
            />
            <Button
              name={"Book a Free Trial Class"}
              theme={"transparent"}
              textClassName="sm:text-14"
              className="4xs:w-auto"
              onClick={triggerBookClassForm}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center mt-4 lg:mt-0"
          >
            <Users />
            <p className="font-aileron_r text-14 ml-3">
              12K+ students trust us to succeed
            </p>
          </motion.div>
        </div>
        <div className="relative mt-[40px] md:mt-0">
          <motion.img
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={Section1Img}
            alt=""
          />
          <FloatingText
            text={"Only the Best Tutors and Mentors"}
            icon={<GraduationCap />}
            className={"absolute top-[5%] right-[-5%] "}
          />
          <FloatingText
            text={"Real Experts. Real Experience. Real Results."}
            icon={<GoldStar />}
            className={"absolute top-[15%] right-[-5%] "}
          />
          <FloatingText
            text={"95% course completion rate"}
            icon={<GoldCup />}
            className={"absolute bottom-[15%] left-[-5%] "}
          />
          <FloatingText
            text={"Over 10,000 students empowered"}
            icon={<RolledScroll />}
            className={"absolute bottom-[5%] left-[-5%] "}
          />
        </div>
      </div>
    </div>
  );
};


const FloatingText = ({text, icon, className}) => {
  return (
    <>
      <motion.div
        className={`rounded-[8px] p-[1px] bg-gradient-to-br from-brand_primary to-dark_brand_primary ${className}`}
        animate={{
          y: [0, -15, 0], // Move up 20px, then back to original
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="flex gap-3 w-fit bg-[#FFFFF5] rounded-[8px] py-1 px-3">
          {icon}
          <p className="font-aileron_sb text-brand_secondary text-14 leading-[24px]">
            {text}
          </p>
        </div>
      </motion.div>
    </>
  );
}


export default Section1;

