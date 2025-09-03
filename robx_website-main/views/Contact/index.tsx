import Hero from "@/components/contact/Hero";
import ContactForm from "../../components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
const Contactpage = () => {
  return (
    <div className="overflow-x-clip bg-[#100816]">
      <Hero />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};
export default Contactpage;
