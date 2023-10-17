import { useId } from "react";
import s from "./form-field.module.css";
import Input, { InputProps } from "../../atoms/input";

type FormFieldProps = Pick<
  InputProps,
  "onChange" | "placeholder" | "type" | "required" | "value" | "name"
> & { label: string };

export default function FormField({ label, ...props }: FormFieldProps) {
  const id = useId();

  return (
    <div className={s.field}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <Input id={id} {...props} />
    </div>
  );
}
