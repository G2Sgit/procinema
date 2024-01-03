import css from "./UnderlinedHeading.module.scss";

const UnderlinedHeading = ({ tag, text, position, color }) => {
  const Tag = tag || "h2";

  let headingClass = "";
  if (tag === "h2") {
    headingClass = css.heading_two;
  } else if (tag === "h3") {
    headingClass = css.heading_three;
  } else if (tag === "h4") {
    headingClass = css.heading_four;
  }

  let positionClass = "";
  if (position === undefined) {
    positionClass = css.no_line;
  } else if (position === "left") {
    positionClass = css.left;
  } else if (position === "center") {
    positionClass = css.center;
  }

  // let colorClass = "";
  // if (color === undefined || "black") {
  //   colorClass = css.black_color;
  // } else if (color === "orange") {
  //   colorClass = css.orange_color;
  // }

  return (
    <Tag
      className={`${headingClass} ${positionClass} ${
        color === "orange" ? css.orange_color : css.black_color
      }`}>
      {text}
    </Tag>
  );
};

export default UnderlinedHeading;
