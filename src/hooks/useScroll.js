import { useState, useEffect } from 'react';

/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */
export default function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(null);
  const [scrollY, setScrollY] = useState(null);
  const [scrollX, setScrollX] = useState(null);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = e => {
    const offset = document.body.getBoundingClientRect();

    setBodyOffset(offset);
    setScrollY(-offset.top);
    setScrollX(offset.left);
    setScrollDirection(lastScrollTop > -offset.top ? 'up' : 'down');
    setLastScrollTop(-offset.top);
  };

  useEffect(() => {
    if (bodyOffset === null) {
      listener();
    }

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}
