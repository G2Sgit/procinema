import css from "./ContactsList.module.scss";
import { GrMapLocation } from "react-icons/gr";
import { BsChatLeftText } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const ContactsList = ({ contacts }) => {
  const { address, email, phone } = contacts;
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <GrMapLocation className={css.icon} />
        <div className={css["text-thumb"]}>
          <h4 className={css.title}>Office Address</h4>
          <p className={css.text}>{address}</p>
        </div>
      </li>
      <li className={css.item}>
        <BsChatLeftText className={css.icon} />
        <div className={css["text-thumb"]}>
          <h4 className={css.title}>General Enquiries</h4>
          <p className={css.text}>{email}</p>
        </div>
      </li>
      {/* <li className={css.item}>
        <BiSolidPhoneCall className={css.icon} />
        <div className={css["text-thumb"]}>
          <h4 className={css.title}>Call Us</h4>
          <p className={css.text}>{phone}</p>
        </div>
      </li> */}
    </ul>
  );
};

export default ContactsList;
