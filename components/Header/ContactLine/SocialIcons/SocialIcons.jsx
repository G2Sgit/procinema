import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

import css from "./SocialIcons.module.scss";

export default function SocialIcons({ fb, insta, vimeo }) {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a href={insta}>
          <FaInstagram size={20}/>
        </a>
      </li>
      <li className={css.link}>
        <a href={vimeo}>
          <FaVimeoV size={20}/>
        </a>
      </li>
    </ul>
  );
}
