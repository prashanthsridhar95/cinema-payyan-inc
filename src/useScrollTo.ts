import React, { useRef } from 'react';

export const useScrollTo = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const promotionsRef = useRef<HTMLDivElement>(null);

  const refs: Record<string, React.RefObject<HTMLDivElement>> = {
    homeRef,
    aboutRef,
    workRef,
    contactRef,
    promotionsRef
  };

  type ScrollTarget = keyof typeof refs | React.RefObject<HTMLElement> | null;

  const scrollToSection = (target: ScrollTarget) => {
    let elementRef: React.RefObject<HTMLElement> | undefined;

    if (typeof target === 'string') {
      elementRef = refs[target];
    } else if (target && 'current' in target) {
      elementRef = target;
    }

    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.error("Scroll target invalid:", target);
    }
  };
  return {
    scrollToSection,
    homeRef,
    aboutRef,
    workRef,
    contactRef,
    promotionsRef
  };
};