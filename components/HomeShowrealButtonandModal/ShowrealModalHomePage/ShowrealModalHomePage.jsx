"use client";

import css from "./ShowrealModalHomePage.module.scss";
import { IoMdClose } from "react-icons/io";

const ShowrealModalHomePage = ({ closeHandler, url }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.buttonCloseWrapper} onClick={closeHandler}>
          <button className={css.buttonClose}>
            <IoMdClose style={{ color: "white" }} size={30} />
          </button>
        </div>

        <div className={css.iframeContainer}></div>
        <iframe
          src={url}
          class={css.responsiveiframe}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ShowrealModalHomePage;
