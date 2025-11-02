import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import CustomHeading from "components/CustomHeading";
import Image5 from "assets/images/home-sec-5.webp";
import { ReactComponent as ThunderIcon } from "assets/icons/thunder-icon.svg";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import StudentImg from "assets/images/student.webp";

const Section5 = () => {
  const navigate = useNavigate();

  const tutorFeatures = [
    "Experts in Their Fields",
    "Student-Centered Approach",
    "Passionate & Supportive",
    "Proven Track Record",
    "Engaging & Easy to Relate With",
    "Always Up-to-Date",
  ];

  return (
    <div id="tutors" className="bg-white">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[4rem] grid lg:grid-cols-2 gap-[5rem]">
        <div className="relative">
          <img src={Image5} alt="" />
          <motion.div
            className={`absolute right-[-5%] bottom-[20px] rounded-[25px] p-[1px] bg-gradient-to-br from-brand_primary to-dark_brand_primary w-[18rem]`}
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
            <div className="bg-[#FFFFF5] rounded-[25px] w-fit p-4">
              <p className="font-aileron_sb text-brand_secondary text-14 leading-[24px]">
                “The tutors here are simply amazing! 🤩 They’re patient,
                knowledgeable, and genuinely care about helping you understand.”
              </p>
              <div className="flex items-center gap-2 mt-4">
                <img src={StudentImg} alt="student" className="w-[3rem]" />
                <div>
                  <p className="font-aileron_sb text-brand_secondary text-14 leading-[24px]">
                    Sarah Khumalo
                  </p>
                  <p className="font-aileron_sb text-dark_brand_primary text-14 leading-[24px]">
                    Student
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="">
          <CustomHeading text={"Our Tutors"} variants={fadeIn("up", 0.2)} />
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] lg:text-[40px] lg:leading-[40px] leading-[30px] mb-4"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Meet Our Expert Tutors
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 leading-[24px] mb-6"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Supportive, skilled, passionate educators with real-world
            experience, and handpicked to help you succeed.
          </motion.p>
          <div>
            {tutorFeatures.map((item, index) => (
              <motion.div
                variants={fadeIn("", 0.8 + index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={index}
                className="pl-2 bg-gradient-to-b from-brand_primary to-dark_brand_primary mb-[1rem]"
              >
                <div className="flex gap-4 py-3 px-2 bg-gradient-to-r from-[#1A1A1A] to-[#737373]">
                  <ThunderIcon />
                  <p className="font-aileron_b text-white">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-[3rem]"
          >
            <Button
              name={"Get Started"}
              theme={"primary"}
              className="!w-[160px] xs:w-auto sm:mb-6 mb-2"
              onClick={() => {
                navigate("/get-started");
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
