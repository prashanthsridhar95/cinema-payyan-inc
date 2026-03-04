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

  const scrollToSection = (target: any) => {
    let elementRef;

    // IF target is a string (like "aboutRef")
    if (typeof target === 'string') {
      elementRef = refs[target];
    } 
    // IF target is already the Ref object (what your Header is currently sending)
    else if (target && target.current) {
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
    refs: { homeRef, aboutRef, workRef, contactRef, promotionsRef }
  };
};