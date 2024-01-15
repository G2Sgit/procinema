import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import ContactsDetails from "@/components/ContactPageComponents/ContactsDetails/ContactsDetails";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Contact",
  description: "Procinema contact page",
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
          <ContactsDetails hidden="hidden"/>
      </main>
    </>
  );
};

export default ContactPage;
