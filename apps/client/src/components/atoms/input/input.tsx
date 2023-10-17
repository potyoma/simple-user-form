import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import clsx from "clsx";
import s from "./input.module.css";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({ className, ...props }: InputProps) {
  return <input className={clsx(s.input, className)} {...props} />;
}
