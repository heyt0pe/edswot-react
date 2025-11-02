// import Section3AImg from "assets/images/home-sec-2a.webp";
import { ReactComponent as CourseIcon } from "assets/icons/course-icon.svg";
import { ReactComponent as TutorIcon } from "assets/icons/tutor-icon.svg";
import { ReactComponent as CertifiedIcon } from "assets/icons/certified-icon.svg";
import { ReactComponent as ClockIcon } from "assets/icons/clock-icon.svg";
import { ReactComponent as LocationIcon } from "assets/icons/location-icon.svg";
// import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import Subject8 from "assets/images/subjects/subject-8.webp";
import TutorAvatar from "assets/images/mocks/tutor-avatar.png";
import GetStartedModal from "../Modal/GetStartedModal";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import Tabs from "components/Inputs/Tabs";
import { useState } from "react";
import { subjects } from "mocks/subjects";

const Section3 = ({ triggerContactForm }) => {


  const navigate = useNavigate()

  const [showGetStartedForm, setShowGetStartedForm] = useState(false);

  const allTabs = [
    "Subjects",
    "Language Courses",
    "Life Skills",
    "Software & Tech",
    "Exam Prep",
  ];
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(allTabs[0]);
  // const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-white">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[6rem]">
        <div className="flex flex-col items-center">
          <motion.h1
            className="font-albra_sans_sb text-[28px] lg:text-[32px] lg:leading-[40px] leading-[30px] text-center mb-4"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Exceptional Learning, <br /> Redefined for You
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 text-center leading-[24px] mb-[3rem]"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Learn smarter with personalized courses, real-time feedback, and a
            support system built around you.
          </motion.p>
          <Tabs tabs={allTabs} onChange={setActiveTab} />
        </div>
        <div>
          <p className="hidden">{activeTab}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 lgm:grid-cols-4 gap-4">
            {subjects.map((course, idx) => (
              <div
                key={idx}
                className="rounded-[12px] border border-neutral_stroke_2 overflow-hidden shadow-sm bg-white p-2"
              >
                <div className="relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-[12px] mb-4"
                  />
                  <div className="absolute top-2 left-2 flex gap-2 items-center bg-[#FFF2EB] rounded-[16px] px-4 py-1 w-fit">
                    <CourseIcon />
                    <p className="font-albra_sans_m text-dark_brand_primary text-14">
                      Course
                    </p>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-16 font-aileron_sb text-brand_secondary">
                    {course.title}{" "}
                    {course.subtitle && (
                      <span className="text-12 font-aileron_sb text-brand_secondary">
                        ({course.subtitle})
                      </span>
                    )}
                  </h3>
                  <p className="text-14 font-aileron_r text-[#434343] mt-2">
                    {course.desc}
                  </p>
                  {course.prepares && (
                    <p className="text-14 font-aileron_r text-[#434343] mt-2">
                      {course.prepares}
                    </p>
                  )}
                  <div style={{ height: '100%' }}></div>
                  <div className="flex items-center gap-1 mt-3 text-border_stroke_2">
                    <span className="flex items-center gap-1 text-14">
                      <CertifiedIcon /> Certified
                    </span>
                    <span className="h-4 border-l border-neutral_stroke_2 mx-2"></span>
                    <span className="flex items-center gap-1 text-14 text-nowrap">
                      <ClockIcon />
                      90 Days
                    </span>
                    <span className="h-4 border-l border-neutral_stroke_2 mx-2"></span>
                    <span className="flex items-center gap-1 text-14">
                      <LocationIcon />
                      Anywhere
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <img
                      src={TutorAvatar}
                      alt="tutor avatar"
                      className="h-10"
                    />
                    <div>
                      <p className="text-14 font-aileron_sb text-brand_secondary">
                        {course.tutor}
                      </p>
                      <p className="text-12 text-border_stroke_2">
                        Verified
                      </p>
                    </div>
                    <div className="ml-auto flex gap-1 items-center bg-[#EBF5FF] rounded-[16px] px-3 py-1 w-fit">
                      <TutorIcon />
                      <p className="font-albra_sans_m text-[#166EB4] text-14">
                        Tutor
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-brand_primary text-brand_secondary font-aileron_r text-14 py-2 rounded-md" onClick={() => navigate("/get-started")}>
                      Get Started
                    </button>
                    <button className="flex-1 text-brand_secondary font-aileron_r text-14 py-2 rounded-md" onClick={() => setShowGetStartedForm(true)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Special Card */}
            <div className="border border-neutral_stroke_2 rounded-[12px] text-white p-2">
              <img
                src={Subject8}
                alt={"contact us"}
                className="w-full h-40 object-cover rounded-[12px] mb-4"
              />
              <h3 className="text-16 font-aileron_sb text-brand_secondary">
                Can’t Find The Course You Need?
              </h3>
              <p className="text-14 font-aileron_r text-[#434343] mt-2 mb-4">
                Let us know what you’re looking for, we might already be working
                on it!
              </p>
              <button
                onClick={triggerContactForm}
                className="bg-brand_primary text-brand_secondary font-aileron_r text-14 px-6 py-2 rounded-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {showGetStartedForm && (
        <GetStartedModal onClose={() => setShowGetStartedForm(false)} />
      )}
    </div>
  );
};

export default Section3;
