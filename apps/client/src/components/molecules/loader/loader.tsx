import { ReactNode } from "react";
import { DotWave } from "@uiball/loaders";

interface LoaderProps {
  loading?: boolean;
  children: ReactNode;
}

export default function Loader({ loading, children }: LoaderProps) {
  return <>{loading ? <DotWave size={40} color="#fff" /> : children}</>;
}
