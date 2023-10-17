import type { Error as ErrorModel } from "../../../lib/models";
import Heading from "../../atoms/heading";
import Text from "../../atoms/text";
import s from "./error.module.css";

interface ErrorProps {
  error: ErrorModel;
}

export default function Error({ error }: ErrorProps) {
  const { heading, message } = error;

  return (
    <div className={s.error}>
      <Heading>{heading}</Heading>
      <Text className={s.message}>{message}</Text>
    </div>
  );
}
