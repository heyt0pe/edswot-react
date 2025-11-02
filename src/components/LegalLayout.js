import React, { useEffect } from "react";
import LegalTabs from "./LegalTabs";

export default function LegalLayout({ title, bgImage, children }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:pt-[90px] pt-[80px] bg-light_brand_primary">
      <div
        className="relative md:h-[350px] h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center px-[32px]">
          <h1 className="text-24 md:text-[50px] font-aileron_b text-white max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
            {title}
          </h1>
        </div>
      </div>
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
        <div className="flex justify-center">
          <div className="w-full">
            {/* Tabs */}
            <LegalTabs />

            {/* Content */}
            <div className="px-[28px] py-[40px] text-14 leading-[1.7] text-brand_secondary font-aileron_r">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
