import { useEffect, useRef } from 'react';

/**
 * This hook allows for accessing accessing previous values of a hook. The suggested solution is to store
 * the current value of a watched variable after each render (using useRef). On the next render, this value
 * can be accessed and compared with the current value.
 *
 * @param {*} value
 */
const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

export default usePrevious;
