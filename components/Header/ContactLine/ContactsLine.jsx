import Container from "@/components/Container/Container";
import AddressList from "./AddressList/AddressList";
import SocialIcons from "./SocialIcons/SocialIcons";
import Logo from "../Logo/Logo";

import css from "./ContactsLine.module.scss";

const ContactsLine = ({ primary }) => {
  return (
    <div className={primary ? css.contactsLine : css.pageContactsLine}>
      <Container>
        <div className={css.contactsLineWrapper}>
          <AddressList
            email={"procinemapost@gmail.com"}
            // address={"Kyiv, Ukraine"}
            primary
          />
          {/* <Logo /> */}
          <SocialIcons
            fb={"https://www.facebook.com/"}
            insta={"https://www.instagram.com/procinema_studio?igsh=MTVydmlmNXAzYzNueg%3D%3D&utm_source=qr"}
            vimeo={"https://vimeo.com/procinemastudio"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactsLine;
