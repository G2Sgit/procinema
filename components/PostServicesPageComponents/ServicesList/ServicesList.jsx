import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import css from "./ServicesList.module.scss";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Image from "next/image";

// import VideoReact from "@/components/VideoReact/VideoReact";

const ServicesList = () => {
  return (
    <div className={css.section}>
      <Section topSection="topSection">
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
              Procinema Studio provides the following post-production services:
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_high}>
                <h2 className={css.unit_title}>
                  Professional VIDEO EDITING Films, Documentaries, Commercials,
                  Music videos, Trailers and Drone
                </h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="TV COMMERCIALS, FILMS, DOCUMENTARIES, DRONE FILMING"
                  position="left"
                />
                <p className={css.description_text}>
                  Video editing transforms raw footage into a cohesive
                  narrative, controls the video&#39;s pace and flow, fixes
                  errors, enhances image quality, and creates a polished,
                  enjoyable final product. Among the most popular video editing
                  programs we use are Final Cut Pro, Adobe Premiere Pro, After
                  Effects, and Adobe Audition.
                  <br />
                  Video editing combines technical skills with creative vision
                  to engage, inform, and entertain audiences.
                </p>
              </div>
              <div className={css.unit_picture_thumb}>
                <Image
                  src="https://video.procinemastudio.com/images/professional_video_editing.jpg"
                  alt="Professional video editing films, documentaries, commercials, music videos"
                  width="960"
                  height="540"
                />
              </div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_right}>
                <h2 className={css.unit_title}>MOTION GRAPHICS</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="POST-PRODUCTION, PERMITS, DRONE, EQUIPMENT, COLOR GRADING, LOCATION SCOUTING, CASTING"
                  position="left"
                />
                <p className={css.description_text}>
                  A great storytelling tool is motion graphics. The message is
                  conveyed in the quickest way, grabbing and holding the
                  viewer&#39;s attention easily. The right animation design can
                  greatly improve your commercial, regardless of whether
                  you&#39;re in business, IT solutions, education, healthcare,
                  social networks, or entertainment.
                </p>
              </div>
              <div className={css.unit_picture_thumb}>
                <Image
                  src="https://video.procinemastudio.com/images/motion_graphics.jpg"
                  alt="Motion Graphics"
                  width="960"
                  height="540"
                />
              </div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_left}>
                <h2 className={css.unit_title}>COLOR CORRECTION</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="SHOOTING PERMITS, PARKING, FIREFIGHTING DEPARTMENT, POLICE, INSURANCE, LEASES"
                  position="left"
                />
                {/*
//                <p
//                   style={{ marginBottom: "25px" }}
//                   className={css.description_text}
//                 >
//                   First of all, wherever filming, you will need various shooting
//                   permits. That’s where we come in.
//                 </p>
*/}

                <p className={css.description_text}>
                  A color correction process adjusts video footage&#39;s color
                  balance, brightness, and contrast to ensure consistency and
                  fix lighting problems. It helps to create a specific mood or
                  atmosphere through color manipulation.
                </p>
              </div>
              <div className={css.unit_picture_thumb}>
                <Image
                  src="https://video.procinemastudio.com/images/color_correction.jpg"
                  alt="Color Correction"
                  width="960"
                  height="540"
                />
              </div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_right}>
                <h2 className={css.unit_title}>VISUAL EFFECTS</h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="LICENSED STEADICAM/GIMBAL OPERATORS AND DRONE CREW"
                  position="left"
                />

                {/* 
//                 <p
//                   style={{ marginBottom: "25px" }}
//                   className={css.description_text}
//                 >
//                   Let us know of the equipment you need on set and we will
//                   provide it for you.
//                 </p>

                */}
                <p className={css.description_text}>
                  Visual effects can make videos more engaging and vivid by
                  creating illusions or tricks of the eye in a story or imagined
                  world. To enhance the visual aspect of our projects, we use
                  various transitions, filters, and plugins.
                </p>
              </div>
              <div className={css.unit_picture_thumb}>
                <Image
                  src="https://video.procinemastudio.com/images/visual_effects.jpg"
                  alt="Visual Effects"
                  width="960"
                  height="540"
                />
              </div>
            </li>
            <li className={css.service_unit}>
              <div className={css.service_unit_info_left}>
                <h2 className={css.unit_title}>
                  Licensed SOUND DESIGN & MUSIC
                </h2>
                <UnderlinedHeading
                  tag="h4"
                  // text="TV COMMERCIALS, FILMS, DOCUMENTARIES, DRONE FILMING"
                  position="left"
                />
                <p className={css.description_text}>
                  The audio component of video editing is crucial. Our team can
                  adjust audio levels, troubleshoot issues with audio quality,
                  add sound design and background music.
                </p>
              </div>
              <div className={css.unit_picture_thumb}>
                <Image
                  src="https://video.procinemastudio.com/images/music_and_sound_design.jpg"
                  alt="Licensed sound design & music"
                  width="960"
                  height="540"
                />
                {/* <VideoReact
                  height="100%"
                  url="https://video.procinemastudio.com/video/5_music_33m.mov"
                  placeholderImg="https://video.procinemastudio.com/images/5_music_frame.png"
                /> */}
                {/* <video autoPlay className={css.video} muted loop playsinline>
                  <source src="https://video.procinemastudio.com/video/5_music_33m.mov" />
                </video> */}
              </div>
            </li>
          </ul>
        </Container>
      </Section>
    </div>
  );
};

export default ServicesList;
