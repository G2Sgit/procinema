import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import css from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <>
      <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
      <div className={css.top_container}>
        <UnderlinedHeading tag="h2" text="pricing" position="center" />

        <p className={css.page_description_text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          quisquam deleniti possimus sed, impedit neque enim provident. Fugiat
          omnis
        </p>
      </div>
    </>
  );
};

export default Pricing;
