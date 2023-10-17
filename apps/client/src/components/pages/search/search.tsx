import { useState } from "react";
import Heading from "../../atoms/heading";
import SearchForm from "../../organisms/search-form";
import s from "./search.module.css";
import type { Error, User } from "../../../lib/models";
import { getUsers } from "../../../lib/service";
import ResponseDisplay from "../../organisms/response-display";
import { useCancelRequest } from "../../../hooks/use-cancel-request";
import Loader from "../../molecules/loader/loader";

export default function Search() {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const { signal, cancel } = useCancelRequest(loading);

  const startLoading = () => {
    setUsers(undefined);
    setError(undefined);
    cancel();
    setLoading(true);
  };

  const handleSubmit = ({ email, number }: User) => {
    startLoading();
    getUsers(email, number?.replace(/\D/g, ""), signal).then(resp => {
      if (!resp) return;

      setLoading(false);

      if (resp.isOk) {
        setUsers(resp.data!);
        return;
      }

      setError(resp.error);
    });
  };

  return (
    <div className={s.bg}>
      <div className={s.formContainer}>
        <Heading level="h1">Find user</Heading>
        <SearchForm onSubmit={handleSubmit} />
        <Loader loading={loading}>
          <ResponseDisplay error={error} users={users} />
        </Loader>
      </div>
    </div>
  );
}
