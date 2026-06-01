import { useRef } from "react";

export default function Sticker({
  src,
  alt,
  initialX,
  initialY,
  rotation = 0,
}) {
  const ref = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    e.preventDefault();
    const rect = ref.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const onMouseMove = (e) => {
      ref.current.style.left = `${e.clientX - offset.current.x}px`;
      ref.current.style.top = `${e.clientY - offset.current.y}px`;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    const rect = ref.current.getBoundingClientRect();
    offset.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      ref.current.style.left = `${touch.clientX - offset.current.x}px`;
      ref.current.style.top = `${touch.clientY - offset.current.y}px`;
    };

    const onTouchEnd = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
  };

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        position: "absolute",
        left: initialX,
        top: initialY,
        rotate: `${rotation}deg`,
        width: "120px",
        cursor: "grab",
        userSelect: "none",
        zIndex: 100,
        touchAction: "none",
      }}
    />
  );
}
