import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import WorksList from "../../components/WorksPageComponents/WorksList";
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
        <WorksList />
      </Container>
    </Section>
    </>
  );
};

export default WorksPage;
