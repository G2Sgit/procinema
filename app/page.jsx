import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
// import PageTitle from "@/components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/HomePageComponents/MainHero/MainHero";
import HomePageContent from "../components/HomePageComponents/HomePage";

export const metadata = {
  title: "PROCINEMA",
  description: "Procinema studio home page",
};

const HomePage = () => {
  return (
    <>
      <MainHero />
      <Section>
        <Container>
          <HomePageContent />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
