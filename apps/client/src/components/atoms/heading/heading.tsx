import { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import s from "./heading.module.css";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & { level?: HeadingLevel };

export default function Heading({
  children,
  level = "h3",
  className,
  ...props
}: HeadingProps) {
  const Component = level;

  return (
    <Component className={clsx(s.heading, s[level], className)} {...props}>
      {children}
    </Component>
  );
}
