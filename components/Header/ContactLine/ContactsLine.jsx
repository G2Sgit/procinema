import Container from "@/components/Container/Container";
import AddressList from "./AddressList/AddressList";
import SocialIcons from "./SocialIcons/SocialIcons";
import css from "./ContactsLine.module.scss";

const ContactsLine = ({ primary }) => {
  return (
    <div className={primary ? css.contactsLine : css.pageContactsLine}>
      <Container>
        <div className={css.contactsLineWrapper}>
          <AddressList
            email={"procinemapost@gmail.com"}
            phoneNumber={"380670000000"}
            address={"Kyiv, Ukraine"}
            primary
          />
          <SocialIcons
            fb={"https://www.facebook.com/"}
            insta={"http://www.instagram.com/"}
            vimeo={"https://vimeo.com/"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactsLine;
