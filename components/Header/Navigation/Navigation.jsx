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
            className={`${css["nav-link"]} ${
              pathname === "/" ? css["active-link"] : null
            }`}
            href="/">
            Home
          </Link>
        </li>
        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${
              pathname === "/postServices" ? css["active-link"] : null
            }`}
            href="/postServices">
            Post services
          </Link>
        </li>
        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${
              pathname === "/works" ? css["active-link"] : null
            }`}
            href="/works">
            Works
          </Link>
        </li>

        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${
              pathname === "/pricing" ? css["active-link"] : null
            }`}
            href="/pricing">
            Pricing
          </Link>
        </li>
        <li className={css["nav-item"]}>
          <Link
            className={`${css["nav-link"]} ${
              pathname === "/contact" ? css["active-link"] : null
            }`}
            href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
