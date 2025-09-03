import Hero from "@/components/digitalmarketing/hero";
import Principles from "@/components/digitalmarketing/Principles";
import Services from "@/components/digitalmarketing/Services";
import StatsStrip from "@/components/digitalmarketing/StatsStrip";
import RetailShowcase from "@/components/digitalmarketing/RetailShowcase";
import WhyUs from "@/components/digitalmarketing/WhyUs";
import Testimonials from "@/components/digitalmarketing/Testimonials";
import Faq from "@/components/digitalmarketing/faqs";
const index = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <Principles />
      <Services />
      <StatsStrip />
      <RetailShowcase />
      <WhyUs />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default index;
