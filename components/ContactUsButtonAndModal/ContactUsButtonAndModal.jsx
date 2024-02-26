"use client";

import css from "./ContactUsButtonAndModal.module.scss";
import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";
const ContactUsButtonAndModal = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={{
          pathname: pathname,
          query: { modal: "true", type: "new-contact" },
        }}
        className={css.button}
        scroll={false}
      >
        Contact us
      </Link>
    </>
  );
};

export default ContactUsButtonAndModal;
