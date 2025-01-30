import React from "react";
import cl from "./add.module.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckBox from "../Form/CheckBox";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import { FaXmark } from "react-icons/fa6";

const schema = yup
  .object({
    user: yup
      .string()
      .min(3, "мінімум три символи")
      .trim()
      .required("поле обовязкове"),
    stars: yup
      .array()
      .of(yup.boolean())
      .default([false, false, false, false, false]),
    comment: yup.string().trim().required("поле обовязкове"),
  })
  .required();

export default function CreateReview({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    // mode: "onChange",
    resolver: yupResolver(schema),
  });

  // console.log(errors);
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className={cl.wrapForm}
      >
        <button className={cl.close} onClick={closeModal}>
          <FaXmark />
        </button>
        <Input
          label="Ваше ім’я"
          name="user"
          placeholder="..."
          register={register}
          errors={errors}
        />

        <Textarea
          label="Напишіть коротенький відгук"
          name="comment"
          placeholder="..."
          register={register}
          errors={errors}
        />

        <div className={cl.case}>
          <p>
            Оцініть роботу майстра <span>*</span>
          </p>
          <Controller
            control={control}
            name="stars"
            render={({ field: { onChange, value } }) => (
              <CheckBox onChange={onChange} name="stars" value={value} />
            )}
          />
        </div>

        <div className={cl.btnWrap}>
          <button type="submit" className={cl.btn}>
            {isSubmitting ? "Чекаємо" : "Відправити"}
          </button>
        </div>
      </form>
    </>
  );
}
