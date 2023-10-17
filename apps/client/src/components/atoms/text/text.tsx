import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import s from "./text.module.css";

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default function Text({ children, className, ...props }: TextProps) {
  return (
    <p className={clsx(s.text, className)} {...props}>
      {children}
    </p>
  );
}
