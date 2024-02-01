"use client";

import css from "./MainHero.module.scss";
import Container from "@/components/Container/Container";

const MainHero = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.videoOverlay}></div>
      <video autoPlay className={css.video} muted loop>
        <source src="https://video.procinemastudio.com/video/background_v1.mp4" />
      </video>
      <Container>
        <div className={css.content_wrapper}>
          <h1 className={css.title}>Welcome to Procinema</h1>
          <p className={css.subtitle}>
            We are a professional post-production studio <br />
            with a quality approach
          </p>
          <button type="button" className={css.button}>
            Contact us
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MainHero;
