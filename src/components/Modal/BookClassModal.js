import React, { useState } from "react";
import BookClassImg from "assets/images/book-class-img.webp";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';

const BookClassModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async () => {
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: ["hello@edswot.com", "tobi@edswot.com"],
        subject: "Book Trial Class",
        html: `
            <p>Someone filled the Book Trial form on the website<p>
            <p>Name: <strong>${formData.name}</strong>
            <p>Email: <strong>${formData.email}</strong>
            <p>Phone: <strong>${formData.phone}</strong>
            <p>Message: <strong>${formData.message}</strong>
            `,
      }),
    });
  }

  const proceed = async (e) => {
    e.preventDefault();
    if (formData.name.trim().length < 3) {
      toast.error("Please enter a valid name");
      return;
    }
    if (formData.email.trim().length < 3 ||
      !formData.email.includes('@')) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    await sendEmail();

    toast.success("Successful! Our team would reach out");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        {/* Animated overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40"
        />
        {/* Animated modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.23,
          }}
          className="bg-white rounded-2xl max-w-[850px] w-[90%] grid md:grid-cols-2 overflow-hidden shadow-lg relative z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-border_stroke_2 hover:text-black text-[24px] leading-none"
          >
            &times;
          </button>

          {/* Left Section */}
          <div className="hidden md:flex relative p-4 flex-col justify-center items-center">
            <img
              src={BookClassImg}
              alt="Contact illustration"
              className="rounded-xl"
            />
            <div className="absolute bottom-[60px] w-[85%] px-4 py-4 rounded-[10px] backdrop-blur-md bg-black/10 shadow-lg">
              <blockquote className="text-[16px] text-white font-albra_sans_m mb-3">
                “Edswot exists to unlock the potential in every learner.”
              </blockquote>
              <p className="text-white font-aileron_sb text-12">
                Oluwatobi Akapo
              </p>
              <p className="text-white font-aileron_sb text-12">
                Founder & Director at Edsworth Limited
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-8">
            <h2 className="text-24 font-albra_sans_b text-brand_secondary mb-2">
              Book a Free Trial Class
            </h2>
            <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
              Fill out the form and get a personalized quote
            </p>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-brand_secondary font-albra_sans_sb text-14 mb-1">
                  Name <span className="text-error">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full h-[48px] border border-neutral_stroke_1 rounded-xl px-4 py-2 text-16 font-aileron_r text-brand_secondary placeholder:text-border_stroke_2 focus:outline-none focus:ring-2 focus:ring-brand_primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-brand_secondary font-albra_sans_sb text-14 mb-1">
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full h-[48px] border border-neutral_stroke_1 rounded-xl px-4 py-2 text-16 font-aileron_r text-brand_secondary placeholder:text-border_stroke_2 focus:outline-none focus:ring-2 focus:ring-brand_primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-brand_secondary font-albra_sans_sb text-14 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full h-[48px] border border-neutral_stroke_1 rounded-xl px-4 py-2 text-16 font-aileron_r text-brand_secondary placeholder:text-border_stroke_2 focus:outline-none focus:ring-2 focus:ring-brand_primary"
                />
              </div>

              {/* Additional Comment */}
              <div>
                <label className="block text-brand_secondary font-albra_sans_sb text-14 mb-1">
                  Additional Comment
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows="4"
                  className="w-full border border-neutral_stroke_1 rounded-xl px-4 py-2 text-16 font-aileron_r text-brand_secondary placeholder:text-border_stroke_2 focus:outline-none focus:ring-2 focus:ring-brand_primary"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                onClick={proceed}
                className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_r text-14 py-2 rounded-xl transition"
              >
                {isSubmitting ? 'Loading...' : 'Get Custom Plan'}
              </button>
            </form>
          </div>
        </motion.div>
        <ToastContainer />
      </div>
    </AnimatePresence>
  );
};

export default BookClassModal;
