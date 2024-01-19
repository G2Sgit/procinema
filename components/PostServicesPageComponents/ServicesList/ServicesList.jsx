import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import css from "./ServicesList.module.scss";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

const ServicesList = () => {
  return (
    <>
      <Section>
        <Container>
          <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
          <div className={css.top_container}>
            <h2 className={css.page_title}>PRODUCTION SERVICES</h2>
            <UnderlinedHeading
              tag="h3"
              text="CINEMART MOTION PICTURE IS FULL SERVICE PRODUCTION COMPANY SPECIALIZED
      IN COMMERCIAL FILMS, DOCUMENTARIES, DRONE FILMING, CORPORATE FILMS,
      MUSIC VIDEOS AND MANY OTHERS."
              position="center"
              color="black"
            />

            <p className={css.page_description_text}>
              As a result of more than 15 years of experience in commercial and
              film production, Cinemart Production Services offer full
              production support. We can create best commercial films for your
              brand....
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul>
            <li className={css.service_unit}>
              <div className={css.service_unit_info}>
                <h2 className={css.unit_title}>PRODUCTION SERVICES</h2>
                <UnderlinedHeading
                  tag="h4"
                  text="TV COMMERCIALS, FILMS, DOCUMENTARIES, DRONE FILMING"
                  position="left"
                />
                <p className={css.description_text}>
                  Professional Production Services for TV Commercials, Films,
                  Documentaries, Music Videos, Drone and BTS filming.
                </p>
              </div>
              <div className={css.unit_picture_thumb}></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info}>
                <h2 className={css.unit_title}>CO-PRODUCTION</h2>
                <UnderlinedHeading
                  tag="h4"
                  text="POST-PRODUCTION, PERMITS, DRONE, EQUIPMENT, COLOR GRADING, LOCATION SCOUTING, CASTING"
                  position="left"
                />
                <p className={css.description_text}>
                  Personalized approach, your budget is our priority. We will
                  work together to create to ensure easiest ways to create films
                  and commercials. Above all, we are friendly and highly
                  professional and have the passion to make the shooting day an
                  ultimate artistic experience. We cover Germany, Switzerland
                  and Croatia, but also surrounding countries such as Slovenia,
                  Bosnia and Herzegovina and Montenegro.
                </p>
                <UnderlinedHeading tag="h4" text="BENEFITS" />
                <p className={css.description_text}>
                  If your plan is to film in Croatia and to receive government
                  financial benefits you should consider hiring us as your local
                  Co-Production company. Croatian Government supports film
                  making in Croatia by refunding the 25%-30% of the production
                  expenses made in Croatia.
                </p>
                {/* <a className={css.item_link} href="#">
                  BENEFITS OF FILMING IN CROATIA
                </a> */}
              </div>
              <div className={css.unit_picture_thumb}></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info}>
                <h2 className={css.unit_title}>SHOOTING PERMITS</h2>
                <UnderlinedHeading
                  tag="h4"
                  text="SHOOTING PERMITS, PARKING, FIREFIGHTING DEPARTMENT, POLICE, INSURANCE, LEASES"
                  position="left"
                />
                <p
                  style={{ marginBottom: "25px" }}
                  className={css.description_text}>
                  First of all, wherever filming, you will need various shooting
                  permits. That’s where we come in.
                </p>
                <p className={css.description_text}>
                  For example, in Croatia, especially in Primorsko-Goranska
                  County and Istria County, in contrast to other parts of the
                  country, permit fees for filming are affordable and issued in
                  very short period.
                </p>
              </div>
              <div className={css.unit_picture_thumb}></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info}>
                <h2 className={css.unit_title}>
                  CAMERA, CREW & EQUIPMENT HIRE
                </h2>
                <UnderlinedHeading
                  tag="h4"
                  text="LICENSED STEADICAM/GIMBAL OPERATORS AND DRONE CREW"
                  position="left"
                />
                <p
                  style={{ marginBottom: "25px" }}
                  className={css.description_text}>
                  Let us know of the equipment you need on set and we will
                  provide it for you.
                </p>
                <p className={css.description_text}>
                  Our internationally awarded Director, DoP and Colorist is
                  available for all your production and cooperation needs.
                </p>
              </div>
              <div className={css.unit_picture_thumb}></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info}>
                <h2 className={css.unit_title}>PRODUCTION SERVICES</h2>
                <UnderlinedHeading
                  tag="h4"
                  text="TV COMMERCIALS, FILMS, DOCUMENTARIES, DRONE FILMING"
                  position="left"
                />
                <p className={css.description_text}>
                  Professional Production Services for TV Commercials, Films,
                  Documentaries, Music Videos, Drone and BTS filming.
                </p>
              </div>
              <div className={css.unit_picture_thumb}></div>
            </li>
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default ServicesList;
