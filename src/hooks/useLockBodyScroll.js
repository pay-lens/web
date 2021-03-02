import { useLayoutEffect } from 'react';

/**
 * Sometimes you want to prevent your users from being able to scroll the body of your page while a
 * particular component is absolutely positioned over your page (think modal or full-screen mobile
 * menu). It can be confusing to see the background content scroll underneath a modal, especially if
 * you intended to scroll an area within the modal. Well, this hook solves that! Simply call the
 * useLockBodyScroll hook in any component and body scrolling will be locked until that component
 * unmounts.
 *
 * See it in action in the [CodeSandbox Demo](https://codesandbox.io/s/yvkol51m81).
 */
export default function useLockBodyScroll() {
  useLayoutEffect(() => {
   // Get original body overflow
   const originalStyle = window.getComputedStyle(document.body).overflow;
   // Prevent scrolling on mount
   document.body.style.overflow = 'hidden';
   // Re-enable scrolling when component unmounts
   return () => document.body.style.overflow = originalStyle;
   }, []); // Empty array ensures effect is only run on mount and unmount
}
