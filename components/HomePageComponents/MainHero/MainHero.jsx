"use client";

import { useState } from "react";
import css from "./MainHero.module.scss";
import Container from "@/components/Container/Container";
import  ModalContactFormByHeroBtn from "./ModalContactFormByHeroBtn/ModalContactFormByHeroBtn"






const MainHero = () => {

  const [ isOpen, setIsOpen ] = useState(false);





  const openHandler = () => {
    setIsOpen(true)
  }
  const closeHandler = () => {
    setIsOpen(false)
  }




  return (
    <div className={css.wrapper}>
      <div className={css.videoOverlay}></div>

      <video autoPlay className={css.video} muted loop playsInline>
  <source src="https://video.procinemastudio.com/video/background_v1.mp4"/>
</video>

      <Container>
        <div className={css.content_wrapper}>
          <h1 className={css.title}>Welcome to Procinema</h1>
          <p className={css.subtitle}>
            We are a professional post-production studio <br />
            with a quality approach
          </p>
          <button type="button" className={css.button} onClick={openHandler}>
            Contact us
          </button>
          {isOpen && <ModalContactFormByHeroBtn  closeHandler={closeHandler} />}
        </div>
      </Container>
    </div>
  );
};

export default MainHero;
