import Pricing from "@/components/PricingPageComponents/PricingComponent/Pricing";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Pricing",
  description: "Procinema pricing page",
};

const PricingPage = () => {
  return (
    <>
      <Header />
      <Pricing />
    </>
  );
};

export default PricingPage;
