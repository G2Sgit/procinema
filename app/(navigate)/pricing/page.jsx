import Pricing from "@/components/PricingPageComponents/PricingComponent/Pricing";
import ContactToUsModal from "@/components/FormModal/FormModal";

export const metadata = {
  title: "Pricing",
  description: "Procinema pricing page",
};

const PricingPage = (props) => {
  const { searchParams } = props;
  const showModal = searchParams?.modal === "true";
  const type = searchParams?.type;
  const status = searchParams?.status;
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
