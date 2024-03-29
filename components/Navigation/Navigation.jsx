// "use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "./Navigation.module.scss";
import BurgerBtn from "../Header/BurgerBtn/BurgerBtn";
import MobileNavigationContacts from "../Header/MobileNavigationContacts/MobileNavigationContacts";

const Navigation = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  return (
    <>
      <nav
        className={
          isOpen ? `${css.nav_container} ${css.isOpen}` : `${css.nav_container}`
        }
      >
        <BurgerBtn setIsOpen={setIsOpen} isOpen={isOpen} />

        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <Link
              //Home link color depending on whether it is a main page or some other page
              className={`
             ${pathname === "/" ? css.main_page_home_link : css.nav_link}`}
              href="/"
              // onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link
              // Link color for current path and color behavior for this link on the main page
              className={`${css.nav_link}
            
             ${
               pathname === "/postservices" && pathname !== "/"
                 ? css.active_link
                 : null
             } 
             
            ${pathname === "/" && css.nav_link_main}`}
              href="/postservices"
              onClick={() => setIsOpen(!isOpen)}
            >
              Post services
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link
              // Link color for current path and color behavior for this link on the main page
              className={`${css.nav_link} ${
                pathname === "/works" && pathname !== "/"
                  ? css.active_link
                  : null
              } 
            ${pathname === "/" && css.nav_link_main}`}
              href="/works"
              onClick={() => setIsOpen(!isOpen)}
            >
              Works
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link
              // Link color for current path and color behavior for this link on the main page
              className={`${css.nav_link} ${
                pathname === "/pricing" && pathname !== "/"
                  ? css.active_link
                  : null
              } 
            ${pathname === "/" && css.nav_link_main}`}
              href="/pricing"
              onClick={() => setIsOpen(!isOpen)}
            >
              Pricing
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link
              // Link color for current path and color behavior for this link on the main page
              className={`${css.nav_link} ${
                pathname === "/contact" && pathname !== "/"
                  ? css.active_link
                  : null
              } 
            ${pathname === "/" && css.nav_link_main}`}
              href="/contact"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {isOpen && (
          <MobileNavigationContacts
            email={"procinemapost@gmail.com"}
            phoneNumber={"380670000000"}
            address={"Kyiv, Ukraine"}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;
