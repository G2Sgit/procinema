import { IoMdClose } from "react-icons/io";
import css from "./BurgerBtn.module.scss";

const BurgerBtn = ({ setIsOpen, isOpen }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoMdClose value={{ fill: 'black' }}/>
        ) : (
          <svg fill={"white"} width={"80px"} height={"70px"}>
            <use href={"/icons-sprite.svg#burger-menu"} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BurgerBtn;
