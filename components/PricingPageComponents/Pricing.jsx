import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <>
      <Section>
        <Container>
          <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
          <div className={css.top_container}>
            <UnderlinedHeading tag="h2" text="pricing" position="center" />

            <p className={css.page_description_text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              quisquam deleniti possimus sed, impedit neque enim provident.
              Fugiat omnis
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Pricing;
