"use client";

import VideoReact from "@/components/VideoReact/VideoReact";
import HomeShowrealButtonandModal from "@/components/HomeShowrealButtonandModal/HomeShowrealButtonandModal";

import Section from "@/components/Section/Section";

import css from "./ShowrealSection.module.scss";

const ShowrealSection = () => {

    return (
        <div className={css.section}>
            <section className={css.wrapper}>
                <h2 className={css["visually_hidden"]}>Showreal</h2>
                <div className={css.parent}>
                    <div className={css["video__item--1"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css.overlay}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--2"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css.overlay}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--3"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css.overlay}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--4"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css["overlay-large"]}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--5"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css.overlay}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--6"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css.overlay}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--7"]}>
                        <div className={css["img-video"]}>
                            <HomeShowrealButtonandModal
                                url="https://player.vimeo.com/video/912707190?h=a0e16f4890"
                            />
                        </div>
                        <div className={css.overlay}>
                            <h3>Title</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShowrealSection;