// const { FiPhoneCall } = require("react-icons/fi");
const { MdOutlineMailOutline } = require("react-icons/md");
// const { RiMapPinLine } = require("react-icons/ri");
// import { TbMapPin2 } from "react-icons/tb";
import css from "./MobileNavigation.module.scss";

const MobileNavigationContacts = ({ email, 
  // phoneNumber, address 
}) => {
  return (
    <div className={css.address_wrapper}>
      <ul>
        <li className={css.item}>
          <MdOutlineMailOutline />
          <div className={css}>
            <h3 className={css.title}>Email us</h3>
            <a href="/">
              <span> {email}</span>
            </a>
          </div>
        </li>
        {/* <li className={css.item}>
          <FiPhoneCall />
          <div className={css}>
            <h3 className={css.title}>Call us</h3>
            <a href={`tel:+${phoneNumber}`}>
              <span>{phoneNumber}</span>
            </a>
          </div>
        </li> */}
        {/* <li className={css.item}>
          <TbMapPin2 />
          <div className={css}>
            <h3 className={css.title}>Address</h3>
            <a href="/">
              <span>{address}</span>
            </a>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default MobileNavigationContacts;
