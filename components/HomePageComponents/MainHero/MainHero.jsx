"use client";

import css from "./MainHero.module.scss";
import "next-cloudinary/dist/cld-video-player.css";
import { CldVideoPlayer } from "next-cloudinary";
import Container from "@/components/Container/Container";

const MainHero = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.videoOverlay}></div>
      <CldVideoPlayer
        src="pbtwqyilcpgpm0syzapm"
        autoPlay="always"
        loop={true}
        muted={true}
        controls={false}
        className={css.video}
      />

      {/* <div className={css.triangle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
        </svg>
      </div> */}
      <Container>
        <div className={css.content_wrapper}>
          <h1 className={css.title}>WELCOME TO PROCINEMA</h1>
          {/* <p className={css.subtitle}>Creating Digital Excellence</p> */}
          <button type="button" className={css.button}>
            Contact us
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MainHero;
