import { FaInstagram } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";

import css from "./SocialIcons.module.scss";

export default function SocialIcons({ fb, insta, vimeo }) {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a href={insta}>
          <FaInstagram />
        </a>
      </li>
      <li className={css.link}>
        <a href={vimeo}>
          <FaVimeo />
        </a>
      </li>
    </ul>
  );
}
