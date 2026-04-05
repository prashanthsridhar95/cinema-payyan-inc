import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({ children, className = "", onClick, href, target, rel }: MagneticButtonProps) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerMode = () => {
      const finePointer = mediaQuery.matches;
      setIsFinePointer(finePointer);
      if (!finePointer) {
        setPosition({ x: 0, y: 0 });
      }
    };

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => mediaQuery.removeEventListener("change", updatePointerMode);
  }, []);

  const handleMouse = (e: MouseEvent<HTMLElement>) => {
    if (!isFinePointer) return;
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const commonProps = {
    ref,
    onMouseMove: isFinePointer ? handleMouse : undefined,
    onMouseLeave: isFinePointer ? reset : undefined,
    className,
    animate: { x: isFinePointer ? position.x : 0, y: isFinePointer ? position.y : 0 },
    transition: { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 },
    onClick,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...commonProps}>
      {children}
    </motion.button>
  );
}
