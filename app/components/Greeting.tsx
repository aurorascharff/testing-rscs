"use client";

import { use } from "react";

type Props = {
  messagePromise: Promise<string>;
};

export default function Greeting({ messagePromise }: Props) {
  const message = use(messagePromise);

  return <p className="text-sm">{message}</p>;
}
