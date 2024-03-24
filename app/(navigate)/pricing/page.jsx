import Pricing from "@/components/PricingPageComponents/PricingComponent/Pricing";
import ContactToUsModal from "@/components/ContactToUsModal/FormModal";

export const metadata = {
  title:
    "Video editing & Post production services | Acceptable price range | High quality approach to each client individually",
  description:
    "Professional post production services. Professional video editing. Prices are discussed individually according to your production brief.",
};

const PricingPage = (props) => {
  // const { searchParams } = props;
  const showModal = props?.searchParams?.modal === "true";
  const type = props?.searchParams?.type;
  const status = props?.searchParams?.status;
  return (
    <>
      <Pricing />
      {showModal && (
        <ContactToUsModal type={type} status={status} show={showModal} />
      )}
    </>
  );
};

export default PricingPage;
