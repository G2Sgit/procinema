// "use client";
// import Navigation from "@/components/Navigation/Navigation";
// import Logo from "../Logo/Logo";
// import LogoText from "../Logo/LogoText/LogoText";
// import css from "./NavigationLine.module.scss";
// import { useState, useEffect, useMemo } from "react";
// import BurgerBtn from "../BurgerBtn/BurgerBtn";
// import Container from "@/components/Container/Container";

// const NavigationLine = ({ isHomePage }) => {
//   // const { scrollY } = window;
//   // const [position, setPosition] = useState(scrollY);
//   // const [visible, setVisible] = useState(true);
//   // const [isFixed, setIsFixed] = useState(false);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     let moving = scrollY;

//   //     setIsFixed(moving > 300);
//   //     setVisible(position > moving);
//   //     setPosition(moving);
//   //   };
//   //   window.addEventListener("scroll", handleScroll);
//   // });
//   const [isOpen, setIsOpen] = useState(false);

//   // const classList = useMemo(() => {
//   //   const classes = [css.staticNav];
//   //   if (visible) {
//   //     classes.push(css.visible);
//   //   } else {
//   //     classes.push(css.hidden);
//   //   }

//   //   if (isFixed) {
//   //     classes.push(css.fixed);
//   //   }

//   //   return classes.join(" ");
//   // }, [isFixed, visible]);

//   return (
//     <div className={classList}>
//       <Container>
//         <div className={css.fixedNav}>
//           <Logo isHomePage={isHomePage} isFixed={isFixed} />
//           <BurgerBtn setIsOpen={setIsOpen} isOpen={isOpen} />
//           <Navigation
//             isHomePage={isHomePage}
//             setIsOpen={setIsOpen}
//             isOpen={isOpen}
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default NavigationLine;

"use client";
import Navigation from "@/components/Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./NavigationLine.module.scss";
import { useState, useEffect, useMemo } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Container from "@/components/Container/Container";

const NavigationLine = ({ isHomePage }) => {
  // const { scrollY } = window;

  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
  //===============================

  const [position, setPosition] = useState(scrollY);
  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // let moving = scrollY;

      let moving = typeof window !== "undefined" ? window.scrollY : 0;
      //==============================

      setIsFixed(moving > 300);
      setVisible(position > moving);
      setPosition(moving);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // window.addEventListener("scroll", handleScroll);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [position]);
  // });

  const [isOpen, setIsOpen] = useState(false);

  const classList = useMemo(() => {
    const classes = [css.staticNav];
    if (visible) {
      classes.push(css.visible);
    } else {
      classes.push(css.hidden);
    }

    if (isFixed) {
      classes.push(css.fixed);
    }

    return classes.join(" ");
  }, [isFixed, visible]);

  return (
    <div className={classList}>
      <Container>
        <div className={css.fixedNav}>
          <Logo isHomePage={isHomePage} isFixed={isFixed}/>

          <BurgerBtn setIsOpen={setIsOpen} isOpen={isOpen} />
          <Navigation
            isHomePage={isHomePage}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      </Container>
    </div>
  );
};

export default NavigationLine;
