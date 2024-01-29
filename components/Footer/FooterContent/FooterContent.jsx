import Container from "@/components/Container/Container";
import css from "./FooterContent.module.scss";
import ContentInfo from "./ContentInfo/ContentInfo";
import ContentNavigation from "./ContentNavigation/ContentNavigation";
import Subscribe from "./Subscribe/Subscribe";

const FooterContent = () => {
  return (
    <div className={css.footerContentWrapper}>
      <Container>
        <div className={css.footerContent}>
          <ContentInfo />
          <Subscribe/>
          <ContentNavigation /> 
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;