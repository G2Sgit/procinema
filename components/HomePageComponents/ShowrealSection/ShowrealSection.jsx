"use client";

import * as basicLightbox from "basiclightbox";

import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

import css from "./ShowrealSection.module.scss";

const ShowrealSection = () => {

    // const instance = basicLightbox.create(`
    //     <iframe src="https://www.youtube.com/watch?v=ri3kZI0Ixfs" width="560" height="315" frameborder="0"></iframe>
    // `);

    // document.querySelector('.img-video').onclick = () => {
    //     instance.show();
    // };
    
    return (
        <div className={css.wrapper}>
            <Section>
                <h2 className={css["visually_hidden"]}>Showreal</h2>
                <div className={css.parent}>
                    <div className={css["video__item--1"]}>
                        <div className={css["img-video"]}></div>
                        <div className={css.overlay}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--2"]}>
                        <div className={css.overlay}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--3"]}>
                        <div className={css.overlay}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--4"]}>
                        <div className={css["overlay-large"]}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--5"]}>
                        <div className={css.overlay}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--6"]}>
                        <div className={css.overlay}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css["video__item--7"]}>
                        <div className={css.overlay}>
                            <h3>VIP Auto Tires & Service</h3>
                            <ul>
                                <li>eCommerce</li>
                                <li>Magento</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ShowrealSection;