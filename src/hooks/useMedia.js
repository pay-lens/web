import { useState, useEffect } from 'react';

/**
 * This hook makes it super easy to utilize media queries in your component logic. In our example
 * below we render a different number of columns depending on which media query matches the current
 * screen width, and then distribute images amongst the columns in a way that limits column height
 * difference (we don't want one column way longer than the rest).
 *
 * You could create a hook that directly measures screen width instead of using media queries, but
 * this method is nice because it makes it easy to share media queries between JS and your stylesheet.
 *
 * See it in action in the [CodeSandbox Demo](https://codesandbox.io/s/6jlmpjq9vw).
 */
export default function useMedia(queries, values, defaultValue) {
  // State and setter for matched value
  const [value, setValue] = useState('');
  const [mediaQueryLists, setMediaQueryLists] = useState([]);

  // Function that gets value based on matching media query
  const getValue = () => {
    console.log('getValue | mediaQueryLists', mediaQueryLists);
    if (!mediaQueryLists.length) {
      return false;
    }

    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches);

    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  useEffect(() => {
    // Array containing a media query list for each query
    setMediaQueryLists(queries.map(q => window.matchMedia(q)));
  }, []);

  useEffect(() => {
    setValue(getValue);
    const handler = () => setValue(getValue);

    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mql => mql.addListener(handler));

    // Remove listeners on cleanup
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, [mediaQueryLists])

  return value;
}
