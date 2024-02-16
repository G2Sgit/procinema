import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

import css from "./SocialIcons.module.scss";

export default function SocialIcons({ fb, insta, vimeo }) {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a
          href={
            "https://www.instagram.com/procinema_studio?igsh=MTVydmlmNXAzYzNueg%3D%3D&utm_source=qr"
          }
        >
          <FaInstagram />
        </a>
      </li>
      <li className={css.link}>
        <a href={"https://vimeo.com/procinemastudio"}>
          <FaVimeoV />
        </a>
      </li>
    </ul>
  );
}
