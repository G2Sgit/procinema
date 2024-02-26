import ModalHeading from "@/components/ModalHeading/ModalHeading";
import css from "./ModalWorks.module.scss";

const ModalWorks = ({ url }) => {
  return (
    <>
      {/* <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.buttonCloseWrapper} onClick={closeHandler}>
          <button className={css.buttonClose}>
            <IoMdClose style={{ color: 'white' }} size={30} />
          </button>
        </div> */}

      {/* <h2>
        <a href="https://vimeo.com/912707190">
          Documentary short film&nbsp;&quot;Road to the dream&quot; (2021)
        </a>{" "}
        from <a href="https://vimeo.com/procinemastudio">Procinema Studio</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </h2> */}

      <iframe
        src={`https://player.vimeo.com/video/912707190?h=${url}`}
        class={css.responsiveiframe}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default ModalWorks;
