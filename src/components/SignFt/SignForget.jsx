import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cl from "./forget.module.scss";
import Input from "../Form/Input";
import { Link } from "react-router";

const schema = yup
  .object({
    user: yup
      .string()
      .min(3, "мінімум три символи")
      .trim()
      .required("поле обовязкове"),
    tel: yup
      .string()
      .matches(/^0\d{9}$/, "перша цифра 0, разом 10 цифр")
      .trim()
      .required("поле обовязкове"),
  })
  .required();

export default function SignForget() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className={cl.formFt}
      >
        <Input
          label="Ім’я або назва компанії"
          name="user"
          placeholder="..."
          register={register}
          errors={errors}
        />
        <Input
          label="Мобільний телефон"
          placeholder="0679998877"
          name="tel"
          register={register}
          errors={errors}
        />

        <div className={cl.btnWrap}>
          <button type="submit" className={cl.btn}>
            {isSubmitting ? "Чекаємо" : "Відправити"}
          </button>
        </div>
      </form>
      <Link to="/auth/forget/password">New pass</Link>
    </div>
  );
}
