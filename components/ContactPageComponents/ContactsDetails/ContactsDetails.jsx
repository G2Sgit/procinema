import css from "./ContactsDetails.module.scss";
import Container from "@/components/Container/Container";
import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import ContactsHeading from "../ContactsHeading/ContactsHeading";
import ContactsParagraph from "../ContactsParagraph/ContactsParagraph";
import ContactsList from "../ContactsList/ContactsList";
import ContactsForm from "../ContactsForm/ContactsForm";

const ContactsDetails = ({ sectionTitle, hidden }) => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={hidden ? css.titleHid : css.title}>{sectionTitle}</h2>
        <div className={css.thumb}>
          <div className={css["left-column"]}>
            <UnderlinedHeading tag="h2" text="Procinema" position="center"/>
            {/* <ContactsHeading text="London Web Studio" /> */}
            <p>We are committed to providing excellent customer service and look forward to assisting you with your inquiries.</p>
            <ContactsList
              contacts={{
                address: "Kyiv, Ukraine",
                email: "office@procinemastudio.com",
                // phone: "+38 044 555-55-55",
              }}
            />
          </div>
          <div className={css["right-column"]}>
          <UnderlinedHeading tag="h2" text="Contact Us" position="center" color="orange"/>
            {/* <ContactsHeading text="Contact Us" light={true} /> */}
            <ContactsForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactsDetails;
