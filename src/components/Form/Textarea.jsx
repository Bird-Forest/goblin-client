import React from "react";
import cl from "./form.module.scss";

export default function Textarea({
  label,
  register,
  name,
  errors,
  placeholder,
}) {
  return (
    <label className={cl.wrapInput}>
      <p className={cl.label}>
        {label}
        <span>*</span>
      </p>
      <textarea
        placeholder={placeholder}
        {...register(name)}
        className={cl.fieldTa}
      ></textarea>
      <p className={cl.error}>{errors?.[name]?.message}</p>
    </label>
  );
}
