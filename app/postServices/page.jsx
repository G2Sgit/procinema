import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";

export const metadata = {
  title: "Post services",
  description: "Procinema post services page",
};

const PostServicesPage = () => {
  return (
    <Section>
      <Container>
        <PageTitle text="Post services" />
        <Paragraph
          content="POST SERVICES Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
        />
      </Container>
    </Section>
  );
};

export default PostServicesPage;
