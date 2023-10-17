import { ChangeEvent } from "react";
import { useObjectState } from "../../../hooks";
import Button from "../../atoms/button";
import Form from "../../atoms/form";
import FormField from "../../molecules/form-field/form-field";
import s from "./search-form.module.css";
import { maskValue } from "./search-form.utils";
import { User } from "../../../lib/models";

type SearchState = User;

interface SearchFormProps {
  onSubmit: (user: User) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const [state, set] = useObjectState<SearchState>();

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = name === "number" ? maskValue(value) : value;
    set({ [name]: maskedValue });
  };

  const { email, number } = state;

  return (
    <Form onSubmit={() => onSubmit(state)} className={s.form}>
      <FormField
        label="Email"
        placeholder="Type e-mail"
        type="string"
        onChange={handleChange}
        value={email ?? ""}
        name="email"
        required
      />
      <FormField
        label="Phone"
        placeholder="Type phone"
        type="string"
        value={number ?? ""}
        name="number"
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
