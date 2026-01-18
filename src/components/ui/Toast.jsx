"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Toast({ message, type, onClose }) {
  const toastRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      toastRef.current,
      { x: 120, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    const timer = setTimeout(() => {
      gsap.to(toastRef.current, {
        x: 120,
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power3.in",
        onComplete: onClose,
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "border-success bg-success/10 text-success",
    error: "border-error bg-error/10 text-error",
    loading: "border-info bg-info/10 text-info",
  };

  return (
    <div
      ref={toastRef}
      className={`pointer-events-auto flex items-center gap-3
      rounded-xl border px-4 py-3 shadow-lg backdrop-blur
      ${styles[type]}`}
    >
      <span className="font-semibold">{message}</span>
    </div>
  );
}
