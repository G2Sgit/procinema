import Container from "@/components/Container/Container";
import css from "./FooterContent.module.scss";
import ContentAbout from "./ContentAbout/ContentAbout";
import ContentInfo from "./ContentInfo/ContentInfo";
import ContentNavigation from "./ContentNavigation/ContentNavigation";


const FooterContent = () => {
  return (
    <div className={css.footerContentWrapper}>
      <Container>
        <div className={css.footerContent}>
          <ContentAbout />
          <ContentInfo />
          <ContentNavigation /> 
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;