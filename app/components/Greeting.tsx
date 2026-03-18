"use client";

import { use } from "react";

type Props = {
  messagePromise: Promise<string>;
};

export default function Greeting({ messagePromise }: Props) {
  const message = use(messagePromise);

  return <h1>{message}</h1>;
}
