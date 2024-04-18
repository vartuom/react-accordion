import { useState } from "react";

import { ICaptionWrapperProps } from "./types";
import { Container } from "./Container/Container.tsx";

export const Accordion = ({ children, title }: ICaptionWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>{title}</button>
      <Container isOpen={isOpen}>{children}</Container>
    </>
  );
};
