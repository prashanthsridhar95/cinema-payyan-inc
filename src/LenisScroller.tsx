import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface LenisScrollerProps {
  children: ReactNode;
}

export default function LenisScroller({ children }: LenisScrollerProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
