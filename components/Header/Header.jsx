"use client";
import NavigationLine from "./NavigationLine/NavigationLine";
import Logo from "./Logo/Logo";
import css from "./Header.module.scss";
import { useState, useEffect, useMemo } from "react";
// import BurgerBtn from "./BurgerBtn/BurgerBtn";
import ContactsLine from "./ContactLine/ContactsLine";
import Container from "@/components/Container/Container";
const Header = ({ isHomePage }) => {
  // if (typeof window !== 'undefined'){const { scrollY } = window;}

  // const [position, setPosition] = useState(scrollY);
  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = scrollY;

  //     setIsFixed(moving > 300);
  //     setVisible(position > moving);
  //     setPosition(moving);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // });
  const [isOpen, setIsOpen] = useState(false);

  const classList = useMemo(() => {
    const classes = [css.staticNav];
    if (visible) {
      classes.push(css.visible);
    } else {
      classes.push(css.hidden);
    }

    if (isFixed) {
      classes.push(css.fixed);
    }

    return classes.join(" ");
  }, [isFixed, visible]);

  return (
    <header className={css.header}>
      <div className={classList}>
        {/* <BurgerBtn setIsOpen={setIsOpen} isOpen={isOpen} /> */}
        <Container>
          <div className={css.fixedNav}>
            <ContactsLine />
            <Logo isHomePage={isHomePage} />
            <NavigationLine
              isHomePage={isHomePage}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
