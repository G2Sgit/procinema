"use client";
import css from "./ContactsForm.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ModalFormSubmit from "../ModalFormSubmit/ModalFormSubmit";

import { useRouter, usePathname } from "next/navigation";
import { createMessage } from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ContactsForm = ({ isInModal }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is too short")
      .required("Please enter your name"),
    email: Yup.string()
      .email("This is an ERROR email")
      .required("Please enter your email"),
    message: Yup.string()
      .required("Please enter your message")
      .min(20, "Message is too short - should be 20 chars minimum."),
  });

  ///////// url to redirect
  const router = useRouter();
  const pathname = usePathname();
  const PROJECT_URL = "http://procinemastudio.com";
  // const PROJECT_URL = "http://localhost:3000";

  const url = new URL(pathname, PROJECT_URL);
  url.searchParams.set("modal", "true");

  /////// query mutation

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const closeSuccessMessage = () => {
    setIsSuccess(false);
  };
  const closeErrorMessage = () => {
    setIsError(false);
  };

  const handleSubmitForm = async (values) => {
    try {
      await mutateAsync({
        ...values,
      });
      reset();

      if (isInModal) {
        url.searchParams.set("status", "ok");
        router.replace(url.toString());
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
      if (isInModal) {
        url.searchParams.set("status", "false");
        router.replace(url.toString());
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <form
      className={`${css.form} ${isInModal && css.modal}`}
      onSubmit={handleSubmit(async (data) => {
        handleSubmitForm(data);
      })}
    >
      <div className={css["input-thumb"]}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
      </div>

      <div className={css["input-thumb"]}>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
      </div>

      <div className={css["textarea-thumb"]}>
        <textarea
          className={css["text-area"]}
          placeholder="Your Message"
          {...register("message")}
        />
        {errors.message && (
          <p className={css.error}>{errors.message.message}</p>
        )}
      </div>
      <div className={css.buttonWrapper}>
        <button className={css.button} type="submit" disable={isPending}>
          Send Message
        </button>
      </div>
      {isSuccess && (
        <ModalFormSubmit
          submit="success"
          text="Success"
          buttonText="OK"
          closeHandler={closeSuccessMessage}
        />
      )}
      {isError && (
        <ModalFormSubmit
          text="Error. Try again later"
          buttonText="OK"
          closeHandler={closeErrorMessage}
        />
      )}
    </form>
  );
};

export default ContactsForm;
