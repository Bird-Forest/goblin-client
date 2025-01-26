import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cl from "./form.module.scss";
import Input from "./Input";

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
      //   .length(10, "перша цифра 0, разом 10 цифр")
      .trim()
      .required("поле обовязкове"),
    pwd: yup
      .string()
      .min(10, "мінімум 10 символів")
      .trim()
      .required("поле обовязкове"),
    passphrase: yup.string().trim().required("поле обовязкове"),
    answer: yup.string().trim().required("поле обовязкове"),
  })
  .required();

export default function FormAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   console.log(errors);

  //   console.log(watch("user")); // watch input value by passing the name of it
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className={cl.form}
      >
        <Input
          label="Ваше ім’я"
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

        <input type="submit" value="Зареєструватись" className={cl.btn} />
      </form>
    </div>
  );
}
