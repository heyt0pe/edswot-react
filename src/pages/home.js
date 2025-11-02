import SEO from "../components/SEO";
import Section1 from "components/Home/Section1";
import Section2 from "components/Home/Section2";
import Section3 from "components/Home/Section3";
import Section4 from "components/Home/Section4";
import Section5 from "components/Home/Section5";
import Section6 from "components/Home/Section6";
import Section7 from "components/Home/Section7";
import FAQ from "../components/FAQ";
import Section9 from "components/Home/Section9";
import { useEffect, useState } from "react";
import ContactUsModal from "components/Modal/ContactUsModal";
import BookClassModal from "components/Modal/BookClassModal";
import CreateYourPlanModal from "components/Modal/CreateYourPlanModal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showContactForm, setShowContactForm] = useState(false);
  const [showBookClassForm, setShowBookClassForm] = useState(false);
  const [showCreatePlanForm, setShowCreatePlanForm] = useState(false);

  return (
    <>
      <SEO
        title="ED Swot - Transform Your Learning: Take Classes Anywhere"
        description="ED Swot offers expert-led courses, interactive practice, and live classes to help you master skills anywhere, anytime."
        name="ED Swot - Transform Your Learning: Take Classes Anywhere"
        type="website"
      />
      <Section1 triggerBookClassForm={() => setShowBookClassForm(true)} />
      <Section2 />
      <Section3 triggerContactForm={() => setShowContactForm(true)} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 triggerCreatePlanForm={() => setShowCreatePlanForm(true)} />
      <FAQ />
      <Section9 />
      {showBookClassForm && (
        <BookClassModal onClose={() => setShowBookClassForm(false)} />
      )}
      {showContactForm && (
        <ContactUsModal onClose={() => setShowContactForm(false)} />
      )}
      {showCreatePlanForm && (
        <CreateYourPlanModal onClose={() => setShowCreatePlanForm(false)} />
      )}
    </>
  );
};

export default Home;
