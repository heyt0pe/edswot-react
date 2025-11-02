import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as ArrowRight } from "assets/icons/carousel-arrow-right.svg";
import { ReactComponent as ArrowLeft } from "assets/icons/carousel-arrow-left.svg";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const FAQ = () => {
  const faqs = [
    {
      title: "What is EdSwot?",
      desc: "EdSwot is an online learning platform that offers expert-led courses, interactive practice, and live classes to help you master skills anywhere, anytime.",
    },
    {
      title: "How do the pricing plans work?",
      desc: "We offer flexible plans billed monthly or yearly. Each plan includes different levels of access to courses, live sessions, and support. You can upgrade or downgrade anytime.",
    },
    {
      title: "Can I try EdSwot before committing?",
      desc: "Yes! We offer a free trial so you can explore our platform before choosing a plan.",
    },
    {
      title: "How do the pricing plans work?",
      desc: "We offer flexible plans billed monthly or yearly. Each plan includes different levels of access to courses, live sessions, and support. You can upgrade or downgrade anytime.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomButtonGroupAsArrows = ({
    next,
    previous,
  }) => {
    return (
      <div className="absolute top-[0rem] left-[50%] lg:left-[auto] lg:translate-x-0 -translate-x-1/2 lg:right-[1rem] flex space-x-1">
        <ArrowLeft onClick={() => previous()} />
        <ArrowRight onClick={() => next()} />
      </div>
    );
  };
  // const isMobile = window.innerWidth < 768;

  return (
    <div id="faq" className="bg-light_brand_primary">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[4rem]">
        <div className="lg:w-[50%]">
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] lg:text-[32px] lg:leading-[40px] leading-[30px] mb-4"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Frequently Asked Questions (FAQs)
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 leading-[24px] mb-6"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Got questions? We've got answers. Find clarity on what we offer, how
            it works, and how to get the most out of your learning experience.
          </motion.p>
        </div>
        <div className="relative pt-[2rem]">
          <div className="mt-[2rem] w-full">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="curriculum_css"
              customButtonGroup={<CustomButtonGroupAsArrows />}
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {faqs.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-[12px] bg-brand_secondary mx-[10px] h-full`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-18 text-white font-albra_sans_b">
                      {item.title}
                    </h3>
                    <span className="">{item.flag}</span>
                  </div>
                  <p className="text-16 font-aileron_r text-white mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
