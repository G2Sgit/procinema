import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import ServicesList from "../../components/PostServicesPageComponents/ServicesList/ServicesList";

export const metadata = {
  title: "Post services",
  description: "Procinema post services page",
};

const PostServicesPage = () => {
  return (
    <Section>
      <Container>
        <ServicesList />
      </Container>
    </Section>
  );
};

export default PostServicesPage;
