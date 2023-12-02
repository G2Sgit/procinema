"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Navigation.module.scss";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={css["nav-list"]}>
        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${pathname === "/" ? css["active-link"] : null}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${pathname === "/portfolio" ? css["active-link"] : null}`}
            href="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${pathname === "/contacts" ? css["active-link"] : null}`}
            href="/contacts"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
