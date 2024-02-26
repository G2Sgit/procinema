"use client";
import Link from "next/link";
import css from "./FeedbackButton.module.scss";
// import FeedbackModal from "../FeedbackModal/FeedbackModal";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const FeedbackButton = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => setIsOpen(!isOpen);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  params.set("modal", "true");
  params.set("type", "new-feedback");

  return (
    <>
      <Link
        type="button"
        className={css.button}
        // href={"/new-feedback"}
        href={{
          pathname: pathname,
          query: { modal: "true", type: "new-feedback" },
        }}
        scroll={false}
        // onClick={() => {
        //   // router.replace("/new-feedback")
        //   router.push(`${pathname}?${params.toString()}`);
        // }}
      >
        Send feedback
      </Link>
      {/* {isOpen && <FeedbackModal closeHandler={handleClick} />} */}
    </>
  );
};

export default FeedbackButton;
