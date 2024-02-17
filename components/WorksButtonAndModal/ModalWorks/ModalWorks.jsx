"use client";

import css from "./ModalWorks.module.scss";
import { IoMdClose } from "react-icons/io";

const ModalWorks = ({ closeHandler,url }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.buttonCloseWrapper} onClick={closeHandler}>
          <button className={css.buttonClose}>
            <IoMdClose style={{ color: 'white' }} size={30} />
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
        {/* <p>
          <a href="https://vimeo.com/912707190">
            Documentary short film&nbsp;&quot;Road to the dream&quot; (2021)
          </a>{" "}
          from <a href="https://vimeo.com/procinemastudio">Procinema Studio</a>{" "}
          on <a href="https://vimeo.com">Vimeo</a>.
        </p> */}





      </div>
    </div>
  );
};

export default ModalWorks;
