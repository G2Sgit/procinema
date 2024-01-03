import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import Pricing from "../../components/PricingPageComponents/Pricing";

export const metadata = {
  title: "Pricing",
  description: "Procinema pricing page",
};

const PricingPage = () => {
  return (
    <Section>
      <Container>
        <Pricing />
      </Container>
    </Section>
  );
};

export default PricingPage;
