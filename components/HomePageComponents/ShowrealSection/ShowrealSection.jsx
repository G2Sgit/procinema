"use client";

import VideoReact from "@/components/VideoReact/VideoReact";
import WorksButtonAndModal from "@/components/WorksButtonAndModal/WorksButtonAndModal";
import Link from "next/link";
import Section from "@/components/Section/Section";
import Image from "next/image";

import css from "./ShowrealSection.module.scss";
import { GrPlayFill } from "react-icons/gr";
// background-image: url(https://picsum.photos/768/1024);

// background-image: url(https://picsum.photos/763/1024);

// background-image: url(https://picsum.photos/761/1024);

// background-image: url(https://picsum.photos/765/1024);

// background-image: url(https://picsum.photos/767/1024);

// background-image: url(https://picsum.photos/770/1024);

// background-image: url(https://picsum.photos/769/1024);

const videos = [
  {
    id: 1,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--1",
    url: "a0e16f4890",
    img: "https://picsum.photos/768/1024",
  },
  {
    id: 2,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--2",
    url: "a0e16f4890",
    img: "https://picsum.photos/763/1024",
  },
  {
    id: 3,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--3",
    url: "a0e16f4890",
    img: "https://picsum.photos/761/1024",
  },
  {
    id: 4,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--4",
    url: "a0e16f4890",
    img: "https://picsum.photos/765/1024",
  },
  {
    id: 5,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--5",
    url: "a0e16f4890",
    img: "https://picsum.photos/767/1024",
  },
  {
    id: 6,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--6",
    url: "a0e16f4890",
    img: "https://picsum.photos/770/1024",
  },
  {
    id: 7,
    title: "Documentary short film 'Road to the dream' (2021)",
    type: "eCommerce",
    subtitle: "Magento",
    className: "video__item--7",
    url: "a0e16f4890",
    img: "https://picsum.photos/769/1024",
  },
];

const ShowrealSection = () => {
  return (
    <div className={css.wrapper}>
      <Section>
        <h2 className={css["visually_hidden"]}>Showreal</h2>
        <div className={css.parent}>
          {videos.map((item) => {
            const { id, title, type, subtitle, className, url, img } = item;
            return (
              <div key={id} className={css[`${className}`]}>
                <Link
                  className="card"
                  href={`/video/${url}`}
                  passHref
                  scroll={false}
                >
                  {/* <div className={css["img-video"]}></div> */}
                  <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="Poster of a video"
                    className={css["img-video"]}
                    priority={false}
                  />
                  <button type="button" className={css.button}>
                    <GrPlayFill size={20} style={{ color: "white" }} />
                  </button>
                  <div className={css.overlay}>
                    <h3>{title}</h3>
                    <ul>
                      <li>{type}</li>
                      <li>{subtitle}</li>
                    </ul>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default ShowrealSection;
