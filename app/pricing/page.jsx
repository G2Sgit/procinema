import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import Pricing from "../../components/PricingPageComponents/Pricing";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Pricing",
  description: "Procinema pricing page",
};

const PricingPage = () => {
  return (<>
    <Header />
    <Section>
      <Container>
        <Pricing />
      </Container>
    </Section>
    </>
  );
};

export default PricingPage;
