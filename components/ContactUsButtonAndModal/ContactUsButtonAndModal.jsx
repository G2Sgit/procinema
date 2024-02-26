"use client";

// import { useState } from "react";
import css from "./ContactUsButtonAndModal.module.scss";
import Link from "next/link";

// import ModalContactForm from "./ModalContactForm/ModalContactForm";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
const ContactUsButtonAndModal = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openHandler = () => {
  //   setIsOpen(true);
  // };
  // const closeHandler = () => {
  //   setIsOpen(false);
  // };
  // const router = useRouter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  return (
    <>
      <Link
        // type="button"
        // href={pathname === "/pricing" ? "/pricing/new-contact" : "/new-contact"}
        // href={url.toString()}
        href={{
          pathname: pathname,
          query: { modal: "true", type: "new-contact" },
        }}
        className={css.button}
        scroll={false}
        // onClick={openHandler}

        // onClick={() => {
        //   params.set("modal", "true");
        //   params.set("type", "new-contact");
        //   // router.replace(`${pathname}?${params.toString()}`);
        //   router.push(`${pathname}?${params.toString()}`);
        // }}
      >
        Contact us
      </Link>
      {/* {isOpen && <ModalContactForm closeHandler={closeHandler} />} */}
    </>
  );
};

export default ContactUsButtonAndModal;
