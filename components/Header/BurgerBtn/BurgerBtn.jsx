import { IoMdClose } from "react-icons/io";
import css from "./BurgerBtn.module.scss";

const BurgerBtn = ({ setIsOpen, isOpen, isHomePage }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <div className={css.closeButton}>
          <IoMdClose style={{ color: 'black', width:'40px',height:'40px', }}/>
          </div>
        ) : (

          <svg
            // stroke={isHomePage ? "white" : "black"}
            stroke={"white"}
          >
            <use href={"/icons-sprite.svg#burger-menu"} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BurgerBtn;
