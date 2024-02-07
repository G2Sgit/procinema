"use client";
import Section from "@/components/Section/Section";
import css from "./FeedbackSection.module.scss";
import Container from "@/components/Container/Container";
import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import FeedbackSlider from "./FeedbackSlider/FeedbackSlider";
import LeaveFeedback from "./LeaveFeedback/LeaveFeedback";

import { ParallaxBanner } from "react-scroll-parallax";

const sectionContent = [
  {
    id: 1,
    name: "Brian Bunn",
    company: "Some company",
    text: "So awesome! Nearly took my breath away. I must say... your shots are just amazing! How you edit them all together! Your glidecam shots are smooth as butter. Keep up the good work! 🙂",
  },
  {
    id: 2,
    name: "Neil Anthony Rollon",
    company: "Some company",
    text: " That was amazing! You capture the shots in such smooth motion... It's a fluid cinema in its finest. You guys are always an inspiration to us to do the best.",
  },
  {
    id: 3,
    name: "Jill Niraj",
    company: "Some company",
    text: " You approached our ideas with such respect and infused our video with a unique perspective perfectly. We cannot thank you enough for all the time you spent in person working with us to make this project perfect.  ",
  },
  {
    id: 4,
    name: "Jill Niraj",
    company: "Some company",
    text: " You are great! Every angle and perspective is so energetic, modern, and vivid. The music is so fitting and you picked the best shots to include in the five minute film.",
  },
  {
    id: 5,
    name: "Brian ",
    company: "Some company",
    text: " So awesome! Nearly took my breath away. I must say... your shots are just amazing! How you edit them all together! Your glidecam shots are smooth as butter. Keep up the good work! 🙂",
  },
];

const FeedbackSection = () => {
  return (
    <div className={css.wrapper}>
      <ParallaxBanner
        layers={[{ image: "/pexels.jpg", speed: -20 }]}
        className="aspect-[2/1]"
      >
        <Section>
          <Container>
            <h2 className={css.title}>WHAT CLIENTS SAY?</h2>
            <UnderlinedHeading
              tag="h3"
              // text="LOVED BY CLIENTS."
              position="center"
              color="black"
            />
            <LeaveFeedback />
            <FeedbackSlider feedbacks={sectionContent} />
          </Container>
        </Section>
      </ParallaxBanner>
    </div>
  );
};

export default FeedbackSection;
