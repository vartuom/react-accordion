import { useLayoutEffect, useRef } from "react";

export const Container = ({ children, isOpen }: any) => {
  // формируем ссылку на DOM элемент с выпадающим контентом
  const ref = useRef<HTMLDivElement>(null!);

  // используем useLayoutEffect, он срабатывает ДО стадии 'paint' и позволяет провернуть этот трюк
  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (isOpen) {
      // вытаскиваем высоту анимированного блока до начала анимации,
      // можно выставить просто 0 если блок скрыт по умолчанию
      // const {height: oldHeight} = element.getBoundingClientRect();
      const oldHeight = 0;

      // пока браузер не начал рисовать страницу, накинем блоку height = "auto"
      // браузер тут же посчитает его высоту и мы ее запомним (блок еще не нарисован на экране)
      element.style.height = "auto";
      const { height: newHeight } = element.getBoundingClientRect();
      // как только мы узнали будущую высоту блока, сбрасываем ее обратно (в ноль если блок скрыт)
      element.style.height = `${oldHeight}px`;

      // ждем до момента, пока браузер начнет рисовать страницу (до paint)
      // и подсовываем ему высчитанную ранее высоту блока
      requestAnimationFrame(() => {
        element.style.height = `${newHeight}px`;
      });
    } else {
      // если мы закрываем блок, то возвращаем ему oldHeight или просто скидываем в ноль
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
