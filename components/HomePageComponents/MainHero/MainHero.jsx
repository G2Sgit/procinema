import css from "./MainHero.module.scss";
import Container from "@/components/Container/Container";
import ContactUsButtonAndModal from "@/components/ContactUsButtonAndModal/ContactUsButtonAndModal";

const MainHero = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.videoOverlay}></div>

      <video autoPlay className={css.video} muted loop playsInline>
        <source src="https://video.procinemastudio.com/video/video_editing_and_post_production_services.mov" />
      </video>

      <Container>
        <div className={css.content_wrapper}>
          <div className={css.content_tabl_desct}>
            <h1 className={css.title}>
              VIDEO EDITING & POST PRODUCTION SERVICES
            </h1>
            <p className={css.subtitle}>
              The Procinema Post Production Studio is a world-class editing
              outsourcing partner
              <br />
              for video content creators around the world.
            </p>
          </div>
          <div className={css.content_mobile}>
            <svg
              className={css.logo}
              fill={"white"}
              width={"250px"}
              height={"125px"}
            >
              <use href={"/logo-sprite.svg#logo"} />
            </svg>
            <span className={css.logoText}>Post Production Studio</span>
          </div>
          <ContactUsButtonAndModal />
          <p className={css.discountOffer}>30% off first order</p>
        </div>
      </Container>
    </div>
  );
};

export default MainHero;
