import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import { pricingPlans } from "mocks/pricingPlans";

export default function PricingPlans() {
  const navigate = useNavigate();
  // const location = useLocation();
  // const isRequestPage = location.pathname.includes("request");
  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`rounded-2xl shadow-sm p-[35px] flex flex-col h-fit border ${plan.highlight
              ? "bg-white text-white relative border-[3px] border-dark_brand_primary"
              : "bg-light_brand_primary text-neutral-900 border-neutral_stroke_1"
              }`}
            variants={fadeIn("up", 0.2 + idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <div className="pb-[10px]">
                <div className="flex justify-between items-center">
                  <h3
                    className={`px-3 py-1 rounded-full text-[14px] font-aileron_r ${plan.highlight
                      ? "bg-brand_primary text-black"
                      : "bg-brand_secondary text-white"
                      }`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-[36px] md:text-[30px] lgm:text-[60px] font-albra_sans_sb`}
                >
                  {plan.price}
                  <span className={`ml-[20px] text-[22px] font-albra_sans_sb`}>
                    {plan.unit}
                  </span>
                </p>
                <p
                  className={`mt-1 lgm:text-[16px] text-[14px] font-aileron_r`}
                >
                  {plan.description}
                </p>
              </div>
              <ul className="mt-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="py-5 border-t-[0.5px] border-t-[#DFE2E2] text-[16px] font-aileron_r"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              name={`Get Started`}
              theme={plan.highlight ? "primary" : "secondary"}
              className={"w-full mt-[40px]"}
              onClick={() => {
                navigate("/get-started");
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
