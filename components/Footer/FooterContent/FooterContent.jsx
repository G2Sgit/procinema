import Container from "@/components/Container/Container";
import css from "./FooterContent.module.scss";
// import ContentAbout from "./ContentAbout/ContentAbout";
// import ContentInfo from "./ContentInfo/ContentInfo";
// import ContentServices from "./ContentServices/ContentServices";
// import ContentBlog from "./ContentBlog/ContentBlog";

const FooterContent = () => {
  return (
    <div className={css.footerContentWrapper}>
      <Container>
        <div className={css.footerContent}>
          {/* <ContentAbout />
          <ContentInfo />
          <ContentServices />
          <ContentBlog /> */}
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;