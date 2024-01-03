import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Works",
  description: "Procinema works page",
};

const WorksPage = () => {
  return (<>
    <Header />
    <Section>
      <Container>
        <PageTitle text="Works Page" />
        <Paragraph
          content="WORKS Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
        />
      </Container>
    </Section>
    </>
  );
};

export default WorksPage;
