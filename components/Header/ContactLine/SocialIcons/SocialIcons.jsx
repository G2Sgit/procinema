import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import css from "./SocialIcons.module.scss";

export default function SocialIcons({ fb, insta }) {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a href={fb}>
          <FaFacebookF />
        </a>
      </li>
      <li className={css.link}>
        <a href={insta}>
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
}
