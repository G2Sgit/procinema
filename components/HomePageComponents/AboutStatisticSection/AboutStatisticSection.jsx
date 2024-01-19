import Image from "next/image";

// import Container from "../../Container/Container.jsx";

import css from "./AboutStatisticSection.module.scss";
import { GrCompliance } from "react-icons/gr";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { SlGlobe } from "react-icons/sl";

const AboutStatisticSection = () => {
  return (
      <div className={css["counter__container"]}>
        <div className={css["counter__content"]}>
          <ul className={css.row}>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
              <GrCompliance size={60}/>
                <h2 className={css["counter__num"]}>1490</h2>
                <p>Compled Projects</p>
              </div>
            </li>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
              <BsFillPersonCheckFill size={60}/>
                <h2 class={css["counter_num"]}>79</h2>
                <p>Happy clients</p>
              </div>
            </li>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
              <CgSandClock size={60}/>
                <h2 className={css["counter__num"]}>10</h2>
                <p>Years of experience</p>
              </div>
            </li>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
                <SlGlobe size={60}/>
                <h2 className={css["counter__num"]}>4</h2>
                <p>Countries</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default AboutStatisticSection;
