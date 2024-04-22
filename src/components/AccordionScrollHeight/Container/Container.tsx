import { useEffect, useRef, useState } from "react";

export const Container = ({ children, isOpen }: any) => {
  const ref = useRef<HTMLDivElement>(null!);

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(ref.current.scrollHeight);
  }, []);

  const getContainerHeight = () => {
    if (!ref.current) {
      return isOpen ? "auto" : "0px";
    }
    return !isOpen ? `${containerHeight}px` : "0px";
  };

  return (
    <div
      ref={ref}
      style={{
        height: getContainerHeight(),
        transition: "height 300ms ease-in-out",
        overflow: "hidden",
        background: "red",
      }}
    >
      {children}
    </div>
  );
};
