import Pricing from "@/components/PricingPageComponents/PricingComponent/Pricing";
import ContactToUsModal from "@/components/ContactToUsModal/FormModal";

export const metadata = {
  title: "Pricing",
  description: "Procinema pricing page",
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
