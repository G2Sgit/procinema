import Paragraph from "@/components/Paragraph/Paragraph";
import css from "./FeedbackItem.module.scss";
import Image from "next/image";

export default function FeedbackItem({ item }) {

  const {
 
    user_name,
    text,
  } = item;


  

  if (text.length > 180){

    var slicedText = null;
     slicedText = text.slice(0, 180) + '...';

  } else{
    slicedText = text;
  }


  return (
    <div className={css.feedbackItem}>
      <div className={css.text}>
        <Paragraph content={slicedText} />
        <h2>{user_name}</h2>
      </div>
      {/* <div className={css.user}>
        <div>
        </div>
      </div> */}
    </div>
  );
}
