import Container from "@/components/Container/Container";
import css from "./ContactsMap.module.scss";
import ContactsHeading from "../ContactsHeading/ContactsHeading";

const ContactsMap = () => {
  return (
    <section className={css.section}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2354166450828!2d-0.09124812361703402!3d51.52724180925393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671a415eb%3A0xba3bb840e2e16b33!2zMTI0IENpdHkgUmQsIExvbmRvbiBFQzFWIDJOWCwg0JLQtdC70LjQutCwINCR0YDQuNGC0LDQvdGW0Y8!5e0!3m2!1suk!2sua!4v1701732943391!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: "2px solid #eeeeee" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </section>
  );
};

export default ContactsMap;
