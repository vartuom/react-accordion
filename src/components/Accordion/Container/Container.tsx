import { useLayoutEffect, useRef } from "react";

export const Container = ({ children, isOpen }: any) => {
  const ref = useRef<HTMLDivElement>(null!);

  // useLayoutEffect runs before browser paint and allows for all this magic
  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (isOpen) {
      // get height of the wrapper before everything happens
      const { height: oldHeight } = element.getBoundingClientRect();

      // change the height to auto to make browser calculate
      // get new calculated height
      // change it back to old before the browser realises what you did (i.e. before it re-paints)
      element.style.height = "auto";
      const { height: newHeight } = element.getBoundingClientRect();
      element.style.height = `${oldHeight}px`;

      // wait for next paint
      // change height to the new value and watch the browser purr
      requestAnimationFrame(() => {
        element.style.height = `${newHeight}px`;
      });
    } else {
      element.style.height = `0px`;
    }
  }, [children, ref, isOpen]);

  return (
    <div
      ref={ref}
      style={{
        transition: "height 200ms ease-in-out",
        overflow: "hidden",
        background: "red",
      }}
    >
      {children}
    </div>
  );
};
