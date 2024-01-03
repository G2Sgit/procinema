import css from "./Header.module.scss";
import ContactsLine from "./ContactLine/ContactsLine";
import NavigationLine from "./NavigationLine/NavigationLine";
import Container from "@/components/Container/Container";
const Header = ({ isHomePage }) => {

  return (
    <header className={isHomePage ? css.header : css.pageHeader}>
      <ContactsLine primary={isHomePage} />
      <NavigationLine isHomePage={isHomePage} />
    </header>
  );
};

export default Header;
