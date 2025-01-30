import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cl from "./signup.module.scss";
import Input from "../Form/Input";

const schema = yup
  .object({
    user: yup
      .string()
      .min(3, "мінімум три символи")
      .trim()
      .required("поле обов'язкове"),
    tel: yup
      .string()
      .matches(/^0\d{9}$/, "перша цифра 0, разом 10 цифр")
      .trim()
      .required("поле обов'язкове"),
    pwd: yup
      .string()
      .min(10, "мінімум 10 символів")
      .trim()
      .required("поле обов'язкове"),
    passphrase: yup.string().trim().required("поле обов'язкове"),
    answer: yup.string().trim().required("поле обов'язкове"),
  })
  .required();

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   console.log(errors);

  //   console.log(watch("user")); // watch input value by passing the name of it
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className={cl.formUp}
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
      <Input
        label="Пароль 10 символів"
        name="pwd"
        placeholder="..."
        register={register}
        errors={errors}
      />
      <Input
        label="Кодова фраза для перевірки"
        name="passphrase"
        placeholder="..."
        register={register}
        errors={errors}
      />
      <Input
        label="Відповідь, яку знаєте тільки Ви"
        name="answer"
        placeholder="..."
        register={register}
        errors={errors}
      />

      <div className={cl.btnWrap}>
        <button type="submit" className={cl.btn}>
          {isSubmitting ? "Чекаємо" : "Відправити"}
        </button>
      </div>
    </form>
  );
}
