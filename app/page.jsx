import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/HomePageComponents/MainHero/MainHero";
import Header from "@/components/Header/Header";

import AboutStatisticSection from "@/components/HomePageComponents/AboutStatisticSection";

export const metadata = {
  title: "PROCINEMA",
  description: "Procinema studio home page",
};

const HomePage = () => {
  return (
    <>
     <Header isHomePage />
    <MainHero/>
      <Section>
        <AboutStatisticSection/>
      </Section>
      <Section>
        <Container>
          <PageTitle text="Home Page" />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
