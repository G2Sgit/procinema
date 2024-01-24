import css from "./Header.module.scss";
import ContactsLine from "./ContactLine/ContactsLine";
import NavigationLine from "./NavigationLine/NavigationLine";
import Logo from "./Logo/Logo";
// import Container from "@/components/Container/Container";
const Header = ({ isHomePage }) => {
  const classList = () => {
    const classes = [css.header];
    // if (!isHomePage) {
    //   classes.push(css.pageHeader);
    // }

    return classes.join(" ");
  };

  return (
    <header
      // className={isHomePage ? css.header : css.pageHeader}
      className={classList()}
    >
      <div className={css.headerWrapper}></div>
      {isHomePage && <Logo />}
      <ContactsLine primary={isHomePage} />
      <NavigationLine isHomePage={isHomePage} />
    </header>
  );
};

export default Header;
