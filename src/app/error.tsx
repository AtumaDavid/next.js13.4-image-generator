// error page has to be a client component
"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

import React from "react";
import { Button } from "react-bootstrap";

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>error</h1>
      <p>something wwent wrong</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
