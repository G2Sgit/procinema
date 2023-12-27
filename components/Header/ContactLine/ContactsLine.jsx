import Container from "@/components/Container/Container";
import AdressList from "./AdressList/AdressList";
import SocialIcons from "./SocialIcons/SocialIcons";
import css from "./ContactsLine.module.scss";


const ContactsLine = ({ primary }) => {
  return (
    <div className={primary ? css.contactsLine : css.pageContactsLine}>
      <Container>
        <div className={css.contactsLineWrapper}>
          <AdressList
            email={"procinemapost@gmail.com"}
            phoneNumber={"380670000000"}
            address={"Kyiv, Ukraine"}
            primary
          />
          <SocialIcons
            fb={"https://www.facebook.com/"}
            insta={"http://www.instagram.com/"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactsLine;
