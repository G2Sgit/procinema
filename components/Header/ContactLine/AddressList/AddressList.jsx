import css from "./AddressList.module.scss";
import { RiMapPinLine } from "react-icons/ri";
// import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const AdressList = ({ email, phoneNumber, address, primary }) => {
  return (
    <ul
      className={
        !primary ? css["secondary-contactsLine"] : css["primary-contactsLine"]
      }
      // {css.contactsLine}
    >
      <li className={css.link}>
        <a href={`mailto:${email}`} className={css.adressA}>
          {/* <MdOutlineMailOutline /> */}
          <span> {email}</span>

        </a>
      </li>
      {/* <li className={css.link}>
        <a href={`tel:+${phoneNumber}`}>
          <FiPhoneCall />
          <span>{phoneNumber}</span>
        </a>
      </li> */}
      {/* <li className={css.link}>
        <a href="/" className={css.adressA}>
          <RiMapPinLine />
          <span>{address}</span>
        </a>
      </li> */}
    </ul>
  );
};

export default AdressList;
