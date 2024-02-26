import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
// import PageTitle from "@/components/PageTitle/PageTitle";
// import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/HomePageComponents/MainHero/MainHero";
import HomePageContent from "../components/HomePageComponents/HomePage";
import Header from "@/components/Header/Header";
import SowrealSection from "@/components/HomePageComponents/ShowrealSection";
import AboutStatisticSection from "@/components/HomePageComponents/AboutStatisticSection";
import FeedbackSection from "@/components/HomePageComponents/FeedbackSection";
import ContactToUsModal from "@/components/ContactToUsModal/FormModal";
import { getFeedbacks } from "@/services/api";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/services/getQueryClient";

export const metadata = {
  title: "PROCINEMA",
  description: "Procinema studio home page",
};

const HomePage = async (props) => {
  // const { searchParams } = props;
  const showModal = props.searchParams?.modal === "true";
  const type = searchParams?.type;
  const status = searchParams?.status;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["feedbacks"],
    queryFn: () => getFeedbacks({ cache: "no-store" }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Header isHomePage />
        <main>
          <MainHero />
          <Section>
            <Container content="content">
              <HomePageContent />
              <AboutStatisticSection />
            </Container>
          </Section>
          <SowrealSection />

          <FeedbackSection />
        </main>
        {showModal && (
          <ContactToUsModal type={type} status={status} show={showModal} />
        )}
      </HydrationBoundary>
    </>
  );
};

export default HomePage;
