"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import css from "./FeedbackSlider.module.scss";
import Slider from "react-slick";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { useEffect, useState, useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FeedbackSlider({ feedbacks }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentSlide, setCurrentSlide] = useState(1);
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
    dots: false,
    infinity: true,
    autoplay: true,
    // speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // customPaging: function (slider, i) {
    //   return slider.slickCurrentSlide + "/" + (i + 1);
    // },
    beforeChange: (_, newIndex) => {
      setCurrentSlide(newIndex + 1);
    },

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className={css.feedbackSlider}>
      <Slider {...settings} ref={sliderRef}>
        {(data?.length ? data : feedbacks).map((item) => (
          <FeedbackItem item={item} key={item.id} />
        ))}
      </Slider>

      <div className={css.controls}>
        <button type="button" className={css.prev} onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <div className={css.counter}>
          <span>
            {currentSlide}/{feedbacks?.length}
          </span>
        </div>
        <button type="button" className={css.next} onClick={handleNext}>
          <FaChevronRight className={css.next1}/>
          <FaChevronRight className={css.next2} style={{ color: 'black' }}/>
          <FaChevronRight className={css.next3} style={{ color: 'black' }}/>
        </button>
      </div>
    </div>
  );
}
