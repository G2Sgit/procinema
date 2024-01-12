import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <>
      <Section>
        <Container>
          <ul>
            <li>
              <h3 className={css.cardTitle}>DOCUMENTARY film</h3>
              <p className={css.cardParagraph}>Services:</p>
              <ul>
                <li>
                  <p>Professional video editing from 1-3 cameras &#10088;HD, 4k&#10089;</p>
                </li>
                <li>
                  <p>Color Correction</p>
                </li>
                <li>
                  <p>Licensed sound design & music</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>20-25 min long - 500$</p>
                </li>
                <li>
                  <p>30-60 min long - 700$</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>7-14 days turnaround</p>
                </li>
                <li>
                  <p>2 rounds of revisions</p>
                </li>
              </ul>
            </li>

            <li>
              <h3 className={css.cardTitle}>
                COMMERCIAL/ MUSIC VIDEO/ TRAILER
              </h3>
              <p className={css.cardParagraph}>Services:</p>
              <ul>
                <li>
                  <p>Professional video editing &#10088;HD, 4k, 6k&#10089;</p>
                </li>
                <li>
                  <p>Color Correction</p>
                </li>
                <li>
                  <p>Visual Effects</p>
                </li>
                <li>
                  <p>Licensed sound design & music</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>1 min long - 120$</p>
                </li>
                <li>
                  <p>2 min long - 200$</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>3-7 days turnaround</p>
                </li>
                <li>
                  <p>2 rounds of revisions</p>
                </li>
              </ul>
            </li>

            <li>
              <h3 className={css.cardTitle}>MOTION DESIGN template</h3>
              <p className={css.cardParagraph}>Services:</p>
              <ul>
                <li>
                  <p>2D Animation logo, text or visual static</p>
                </li>
                <li>
                  <p>Licensed sound design</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>4-7 sec long - 100$</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>2-4 days turnaround</p>
                </li>
                <li>
                  <p>2 rounds of revisions</p>
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
