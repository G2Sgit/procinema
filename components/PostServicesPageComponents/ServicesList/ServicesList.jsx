import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import css from "./ServicesList.module.scss";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

const ServicesList = () => {
  return (
    <div className={css.section}>
      <Section>
        <Container>
          <h1 className={css.visually_hidden}>POST SERVICES</h1>
          <div className={css.top_container}>
            <h2 className={css.page_title}>POST SERVICES</h2>
            <UnderlinedHeading
              tag="h3"
              // text="We can create the best commercial films for your brand!"
              position="center"
              color="black"
            />

            <p className={css.page_description_text}>
            Procinema Studio offers the next post production services:
           
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_high}>
                <h2 className={css.unit_title}>Professional VIDEO EDITING Films, Documentaries, Commercials, Music videos, Trailers and Drone</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="TV COMMERCIALS, FILMS, DOCUMENTARIES, DRONE FILMING"
                  position="left"
                />
                <p className={css.description_text}>
                During video editing, raw footage can be combined into a cohesive narrative, the pacing and flow of the video can be controlled, errors can be fixed, image and sound quality can be improved, and the final product can be polished and engaging. Among the most popular video editing programs we use are Final Cut Pro, Adobe Premiere Pro, After Effects, and DaVinci Resolve. <br/>In general, video editing is both a technical skill and an art form. Combine technical expertise and creative vision to create videos that engage, inform and entertain audiences.
                </p>
              </div>
              <div className={css.unit_picture_thumb}><video autoPlay className={css.video} muted loop>
  <source src="https://video.procinemastudio.com/video/1_video_editing_43m.mov"/>
</video></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_right}>
                <h2 className={css.unit_title}>Custom MOTION DESIGN</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="POST-PRODUCTION, PERMITS, DRONE, EQUIPMENT, COLOR GRADING, LOCATION SCOUTING, CASTING"
                  position="left"
                />
                <p className={css.description_text}>
                With motion graphics, you can communicate with your audience and add depth to your film. Combined with effective copy and music, they can convey a message. Our company uses them for creating ads, movie titles, explainer videos, and information sharing.
                </p>
                {/* <a className={css.item_link} href="#">
                  BENEFITS OF FILMING IN CROATIA
                </a> */}
              </div>
              <div className={css.unit_picture_thumb}><video autoPlay className={css.video} muted loop playsinline>
  <source src="https://video.procinemastudio.com/video/2_motion_design_21m.mov"/>
</video></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_left}>
                <h2 className={css.unit_title}>COLOR CORRECTION</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="SHOOTING PERMITS, PARKING, FIREFIGHTING DEPARTMENT, POLICE, INSURANCE, LEASES"
                  position="left"
                />
//                <p
//                   style={{ marginBottom: "25px" }}
//                   className={css.description_text}
//                 >
//                   First of all, wherever filming, you will need various shooting
//                   permits. That’s where we come in.
//                 </p>

                <p className={css.description_text}>
                A color correction process adjusts video footage&#39;s color balance, brightness, and contrast to ensure consistency and fix lighting problems. It helps to create a specific mood or atmosphere through color manipulation.
                </p>
              </div>
              <div className={css.unit_picture_thumb}><video autoPlay className={css.video} muted loop>
  <source src="https://video.procinemastudio.com/video/3_color_correction_43m.mov"/>
</video></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_right}>
                <h2 className={css.unit_title}>
                VISUAL EFFECTS 
                </h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="LICENSED STEADICAM/GIMBAL OPERATORS AND DRONE CREW"
                  position="left"
                />
//                 <p
//                   style={{ marginBottom: "25px" }}
//                   className={css.description_text}
//                 >
//                   Let us know of the equipment you need on set and we will
//                   provide it for you.
//                 </p>

                <p className={css.description_text}>
                To make transitions between scenes smoother, various transitions are added between clips. Moreover, we use special effects, color corrections, and filters to enhance the visual aspect of our work.
                </p>
              </div>
              <div className={css.unit_picture_thumb}><video autoPlay className={css.video} muted loop>
  <source src="https://video.procinemastudio.com/video/4_visual_effects_43m.mov"/>
</video></div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_left}>
                <h2 className={css.unit_title}>Licensed SOUND DESIGN & MUSIC</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="TV COMMERCIALS, FILMS, DOCUMENTARIES, DRONE FILMING"
                  position="left"
                />
                <p className={css.description_text}>
                The audio component of video editing is crucial. Our team can adjust audio levels, add background music, and troubleshoot issues with audio quality.
                </p>
              </div>
              <div className={css.unit_picture_thumb}><video autoPlay className={css.video} muted loop playsinline>
  <source src="https://video.procinemastudio.com/video/5_music_33m.mov"/>
</video></div>
            </li>
          </ul>
        </Container>
      </Section>
    </div>
  );
};

export default ServicesList;
