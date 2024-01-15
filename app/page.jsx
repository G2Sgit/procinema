import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
// import PageTitle from "@/components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/HomePageComponents/MainHero/MainHero";
import HomePageContent from "../components/HomePageComponents/HomePage";
import Header from "@/components/Header/Header";
import AboutStatisticSection from "@/components/HomePageComponents/AboutStatisticSection";
import FeedbackSection from "@/components/HomePageComponents/FeedbackSection";

export const metadata = {
  title: "PROCINEMA",
  description: "Procinema studio home page",
};

const HomePage = () => {
  return (
    <>
      <Header isHomePage />
      <MainHero />
      <Section>
        <Container dark="dark">
          <HomePageContent />
          <AboutStatisticSection />
        </Container>
      </Section>
      {/* <Section >
      <Container dark="dark">
        <AboutStatisticSection />
        </Container>
      </Section> */}
      <Section></Section>
      <FeedbackSection />
    </>
  );
};

export default HomePage;
