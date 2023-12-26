import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";

export const metadata = {
  title: "Pricing",
  description: "Procinema pricing page",
};

const PricingPage = () => {
  return (
    <Section>
      <Container>
        <PageTitle text="Pricing Page" />
        <Paragraph
          content="PRICING Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
        />
      </Container>
    </Section>
  );
};

export default PricingPage;
