import { IoMdClose } from "react-icons/io";
import css from "./BurgerBtn.module.scss";

const BurgerBtn = ({ setIsOpen, isOpen,isHomePage }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoMdClose value={{ fill: 'black' }}/>
        ) : (
          <svg stroke={isHomePage?"white":"black"} width={"30px"} height={"30px"}>
            <use href={"/icons-sprite.svg#burger-menu"} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BurgerBtn;
