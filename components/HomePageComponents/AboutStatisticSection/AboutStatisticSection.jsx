import Image from "next/image";

// import Container from "../../Container/Container.jsx";

import css from "./AboutStatisticSection.module.scss";

const AboutStatisticSection = () => {
  return (
    <div className={css.counter}>
      <div className={css["counter__container"]}>
        <div className={css["counter__content"]}>
          <ul className={css.row}>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
                <Image
                  src="/img/homePage/AboutStatisticSection/ci-1.png"
                  width="46"
                  height="60"
                  alt=""
                  className={css["counter__image"]}
                />
                <h2 className={css["counter__num"]}>230</h2>
                <p>Compled Projects</p>
              </div>
            </li>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
                <Image
                  src="/img/homePage/AboutStatisticSection/ci-2.png"
                  width="60"
                  height="60"
                  alt=""
                  className={css["counter__image"]}
                />
                <h2 class={css["counter_num"]}>1068</h2>
                <p>Happy clients</p>
              </div>
            </li>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
                <Image
                  src="/img/homePage/AboutStatisticSection/ci-3.png"
                  width="60"
                  height="60"
                  alt=""
                  className={css["counter__image"]}
                />
                <h2 className={css["counter__num"]}>230</h2>
                <p>Perspective clients</p>
              </div>
            </li>
            <li className={css["counter__item"]}>
              <div className={css["counter__item__text"]}>
                <Image
                  src="/img/homePage/AboutStatisticSection/ci-4.png"
                  width="53"
                  height="60"
                  alt=""
                  className={css["counter__image"]}
                />
                <h2 className={css["counter__num"]}>230</h2>
                <p>Compled Projects</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutStatisticSection;
