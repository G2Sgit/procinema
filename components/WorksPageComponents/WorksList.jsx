import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./WorksList.module.scss";
import WorkItem from "./WorkItem/WorkItem";

const WorksList = () => {
  return (
    <div className={css.wrapper}>
      <Section topSection="topSection">
        <Container>
          <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
          <div className={css.top_container}>
            <UnderlinedHeading
              tag="h2"
              text="LATEST COMMERCIAL PROJECTS"
              position="center"
            />

            <p className={css.page_description_text}>Enjoy watching!</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <WorkItem
            url="https://player.vimeo.com/video/917397396?h=791ce3d358"
            heading="Video editing | Showreel (2023)"
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <WorkItem
            url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
            heading="Video editing | Documentary &quot;Road to the dream&quot; (2021)"
          />
        </Container>
      </Section>
    </div>
  );
};

export default WorksList;
