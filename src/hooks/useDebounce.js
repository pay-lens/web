import { useState, useEffect } from 'react';

/**
 * This hook allows you to debounce any fast changing value. The debounced value will only reflect
 * the latest value when the useDebounce hook has not been called for the specified time period. When
 * used in conjunction with useEffect, as we do in the recipe below, you can easily ensure that
 * expensive operations like API calls are not executed too frequently. The example below allows you
 * to search the Marvel Comic API and uses useDebounce to prevent API calls from being fired on every
 * keystroke.
 *
 * See it in action in the [CodeSandbox demo](https://codesandbox.io/s/711r1zmq50).
 */
export default function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}
