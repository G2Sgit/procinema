"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import css from "./FeedbackSlider.module.scss";
import Slider from "react-slick";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { useEffect, useState } from "react";

export default function FeedbackSlider({ feedbacks }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("/api/messeges") // change route!!!
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;

  const settings = {
    arrows: true,
    dots: true,
    infinity: true,
    autoplay: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={css.FeedbackSlider}>
      <Slider {...settings}>
        {(data?.length ? data : feedbacks).map((item) => (
          <FeedbackItem item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
