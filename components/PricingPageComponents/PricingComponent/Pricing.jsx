import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import css from "./Pricing.module.scss";
import Link from "next/link";

import { MdOutlineRunningWithErrors } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import ContactUsButtonAndModal from "@/components/ContactUsButtonAndModal/ContactUsButtonAndModal";

const Pricing = () => {
  return (
    <div className={css.section}>
      <Section topSection="topSection">
        <Container>
          <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
          <div className={css.top_container}>
            <UnderlinedHeading tag="h2" text="pricing" position="center" />

            <p className={css.page_description_text}>
            *The prices could be discussed in an individual way.
            </p>
          </div>
        </Container>
      </Section>
      <div className={css.pricingConditionsSection}>
        <Container>
          <ul className={css.pricingWrapper}>
            <li>
              <ul className={css.descrButtonswrapper}>
                <li className={css.pricingCardWrapper}>
                  <h3 className={css.cardTitle}>DOCUMENTARY film</h3>
<div className={css.pricesWrapper}>
  <ul className={css.listOfPrices}>
                    <li className={css.servicePrice}>
                      <p className={css.servicePriceText}>
                        <span>
                          <strong>
                            $ <span className={css.priceNumber}>500 </span>
                          </strong>
                        </span>
                        <span>/20-25 min long</span>
                      </p>
                    </li>
                    <li className={css.servicePrice}>
                      <p className={css.servicePriceText}>
                        <span>
                          <strong>
                            $ <span className={css.priceNumber}>700 </span>
                          </strong>
                        </span>
                        <span>/30-60 min long</span>
                      </p>
                    </li>
                  </ul>
                  </div>
                  
                  <p className={css.cardParagraph}>Services:</p>
                  <ul className={css.listOfDef}>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>
                        Professional video editing &#10088;HD, 4k&#10089;
                      </p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>Color Correction</p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>
                        Licensed sound design & music
                      </p>
                    </li>
                  </ul>

                  <ul className={css.listOfSecondDef}>
                    <li className={css.serviceDef}>
                      <MdOutlineRunningWithErrors />
                      <p className={css.serviceDefText}>7-14 days turnaround</p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdPreview />
                      <p className={css.serviceDefText}>
                        2 rounds of revisions
                      </p>
                    </li>
                  </ul>
                  <div className={css.buttonsWrapper}>
                  <ContactUsButtonAndModal/>
                  </div>
                </li>

                {/* <li className={css.buttonsWrapper}>
              <Link className={css.cardButton} href="/contact">Contact us</Link>
            </li> */}
              </ul>
            </li>

            <li>
              <ul className={css.descrButtonswrapper}>
                <li className={css.pricingCardWrapper}>
                  <h3 className={css.cardTitle}>
                    COMMERCIAL/ MUSIC VIDEO/ TRAILER
                  </h3>
                  <div className={css.pricesWrapper}>
                  <ul className={css.listOfPrices}>
                    <li className={css.servicePrice}>
                      <p className={css.servicePriceText}>
                        <span>
                          <strong>
                            $ <span className={css.priceNumber}>120 </span>
                          </strong>
                        </span>
                        <span>/1 min long</span>
                      </p>
                    </li>
                    <li className={css.servicePrice}>
                      <p className={css.servicePriceText}>
                        <span>
                          <strong>
                            $ <span className={css.priceNumber}>200 </span>
                          </strong>
                        </span>
                        <span>/2 min long</span>
                      </p>
                    </li>
                  </ul>
                  </div>
                  <p className={css.cardParagraph}>Services:</p>
                  <ul className={css.listOfDef}>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>
                        Professional video editing &#10088;HD, 4k, 6k&#10089;
                      </p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>Color Correction</p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>Visual Effects</p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>
                        Licensed sound design & music
                      </p>
                    </li>
                  </ul>

                  <ul className={css.listOfSecondDef}>
                    <li className={css.serviceDef}>
                      <MdOutlineRunningWithErrors />
                      <p className={css.serviceDefText}>3-7 days turnaround</p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdPreview />
                      <p className={css.serviceDefText}>
                        2 rounds of revisions
                      </p>
                    </li>
                  </ul>
                  <div className={css.buttonsWrapper}>
                  <ContactUsButtonAndModal/>
                  </div>
                </li>
                {/* <li className={css.buttonsWrapper}>
              <Link className={css.cardButton} href="/contact">Contact us</Link>
            </li> */}
              </ul>
            </li>

            <li>
              <ul className={css.descrButtonswrapper}>
                <li className={css.pricingCardWrapper}>
                  <h3 className={css.cardTitle}>MOTION DESIGN template</h3>
                  <div className={css.pricesWrapper}>
                  <ul className={css.listOfPrices}>
                    <li className={css.servicePrice}>
                      <p className={css.servicePriceText}>
                        <span>
                          <strong>
                            $ <span className={css.priceNumber}>100 </span>
                          </strong>
                        </span>
                        <span>/4-7 sec long</span>
                      </p>
                    </li>
                  </ul>
                  </div>
                  <p className={css.cardParagraph}>Services:</p>
                  <ul className={css.listOfDef}>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>
                        2<span className={css.letterDFix}>D</span> logo or
                        visual static animation
                      </p>
                    </li>
                    <li className={css.serviceDef}>
                      <MdRadioButtonChecked />
                      <p className={css.serviceDefText}>
                        Licensed sound design
                      </p>
                    </li>
                  </ul>

                  <ul className={css.listOfSecondDef}>
                    <li className={css.serviceDef}>
                      <MdOutlineRunningWithErrors />
                      <p className={css.serviceDefText}>2-4 days turnaround</p>
                    </li>

                    <li className={css.serviceDef}>
                      <MdPreview />
                      <p className={css.serviceDefText}>
                        2 rounds of revisions
                      </p>
                    </li>
                  </ul>
                  <div className={css.buttonsWrapper}>
                  <ContactUsButtonAndModal/>
                  </div>
                </li>
                {/* <li className={css.buttonsWrapper}>
              <Link className={css.cardButton} href="/contact">Contact us</Link>
            </li> */}
              </ul>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
