import UnderlinedHeading from "@/components/UnderlinedHeading/UnderlinedHeading";
import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import css from "./Pricing.module.scss";
import Link from "next/link";

import { IoIosRadioButtonOn } from "react-icons/io";
import { TiMediaPlay } from "react-icons/ti";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import { MdPreview } from "react-icons/md";

const Pricing = () => {
  return (
    <>
      <Section>
        <Container>
          <h1 className={css.visually_hidden}>PRODUCTION SERVICES</h1>
          <div className={css.top_container}>
            <UnderlinedHeading tag="h2" text="pricing" position="center" />

            <p className={css.page_description_text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              

            </p>
          </div>
        </Container >
      </Section>
      <Section className={css.pricingConditionsSection}>
<Container >



<ul className={css.pricingWrapper}>

<li>
<ul className={css.descrButtonswrapper}>
            <li className={css.pricingCardWrapper}>
              <h3 className={css.cardTitle}>DOCUMENTARY film</h3>
              <p className={css.cardParagraph}>Services:</p>
              <ul className={css.listOfDef}>


                <li className={css.serviceDef}>
                  <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Professional video editing from 1-3 cameras &#10088;HD, 4k&#10089;</p>
                </li>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Color Correction</p>
                </li>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Licensed sound design & music</p>
                </li>
              </ul>

              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <TiMediaPlay/>
                  <p className={css.serviceDefText}>20-25 min long - 500$</p>
                </li>
                <li className={css.serviceDef}>
                <TiMediaPlay/>
                  <p className={css.serviceDefText}>30-60 min long - 700$</p>
                </li>
              </ul>


              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                  <MdOutlineRunningWithErrors/>
                  <p className={css.serviceDefText}>7-14 days turnaround</p>
                </li>
                <li className={css.serviceDef}>
                <MdPreview/>
                  <p className={css.serviceDefText}>2 rounds of revisions</p>
                </li>
              </ul>
            </li>


            <li className={css.buttonsWrapper}>
              <Link  className={css.cardButton} href="/works">Works</Link>
              <Link className={css.cardButton} href="/contact">Order now</Link>
            </li>
</ul>
</li>


<li>
<ul className={css.descrButtonswrapper}>
            <li className={css.pricingCardWrapper}>
              <h3 className={css.cardTitle}>
                COMMERCIAL/ MUSIC VIDEO/ TRAILER
              </h3>
              <p className={css.cardParagraph}>Services:</p>
              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Professional video editing &#10088;HD, 4k, 6k&#10089;</p>
                </li>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Color Correction</p>
                </li>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Visual Effects</p>
                </li>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Licensed sound design & music</p>
                </li>
              </ul>
              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <TiMediaPlay/>
                  <p className={css.serviceDefText}>1 min long - 120$</p>
                </li>
                <li className={css.serviceDef}>
                <TiMediaPlay/>
                  <p className={css.serviceDefText}>2 min long - 200$</p>
                </li>
              </ul>
              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <MdOutlineRunningWithErrors/>
                  <p className={css.serviceDefText}>3-7 days turnaround</p>
                </li >
                <li className={css.serviceDef}>
                <MdPreview/>
                  <p className={css.serviceDefText}>2 rounds of revisions</p>
                </li>
              </ul>
            </li>
            <li className={css.buttonsWrapper}>
              <Link  className={css.cardButton} href="/works">Works</Link>
              <Link className={css.cardButton} href="/contact">Order now</Link>
            </li>
            </ul>
            </li>



<li>
<ul className={css.descrButtonswrapper}>
            <li className={css.pricingCardWrapper}>
              <h3 className={css.cardTitle}>MOTION DESIGN template</h3>
              <p className={css.cardParagraph}>Services:</p>
              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>2D Animation logo, text or visual static</p>
                </li>
                <li className={css.serviceDef}>
                <IoIosRadioButtonOn/>
                  <p className={css.serviceDefText}>Licensed sound design</p>
                </li>
              </ul>
              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <TiMediaPlay/>
                  <p className={css.serviceDefText}>4-7 sec long - 100$</p>
                </li>
              </ul>
              <ul className={css.listOfDef}>
                <li className={css.serviceDef}>
                <MdOutlineRunningWithErrors/>
                  <p className={css.serviceDefText}>2-4 days turnaround</p>
                </li>
                

                <li className={css.serviceDef}>
                <MdPreview/>
                  <p className={css.serviceDefText}>2 rounds of revisions</p>
                </li>
              </ul>
            </li>
            <li className={css.buttonsWrapper}>
              <Link  className={css.cardButton} href="/works">Works</Link>
              <Link className={css.cardButton} href="/contact">Order now</Link>
            </li>
            </ul>
            </li>

          </ul>
</Container>
      </Section>
    </>
  );
};

export default Pricing;