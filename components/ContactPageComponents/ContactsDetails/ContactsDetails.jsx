import css from "./ContactsDetails.module.scss";
import Container from "@/components/Container/Container";
import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import ContactsHeading from "../ContactsHeading/ContactsHeading";
import ContactsParagraph from "../ContactsParagraph/ContactsParagraph";
import ContactsList from "../ContactsList/ContactsList";
import Section from "@/components/Section/Section";
import ContactsForm from "../ContactsForm/ContactsForm";

const ContactsDetails = ({ sectionTitle, hidden }) => {
  return (<>
    <section className={css.section}>
      <Container>
        <h2 className={hidden ? css.titleHid : css.title}>{sectionTitle}</h2>
        <div className={css.thumb}>

          <div className={css["right-column"]}>
          <UnderlinedHeading tag="h2" text="Contact Us" position="center" color="black"/>
            {/* <ContactsHeading text="Contact Us" light={true} /> */}
            <p className={css.page_description_text}>
            We are committed to providing excellent customer service and look forward to assisting you with your inquiries.
            </p>
          </div>
        </div>
      </Container>
      </section>
      <section className={css.sectionGrey}>
<ContactsForm />
    </section> 
    </>
  );
};

export default ContactsDetails;
