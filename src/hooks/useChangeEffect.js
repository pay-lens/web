import { useEffect } from 'react';
import usePrevious from './usePrevious'

/**
 * This hook watches for changed values. It wraps the effect function with a function that compares the old
 * and new values before calling the original effect function. The first render would always be skipped since
 * the previous values are undefined on the first render.
 *
 * @param {function} effectFunction
 * @param {[*]} values
 */
const useChangeEffect = (effectFunction, values) => {
    const previousValues = usePrevious(values);

    useEffect(() => {
        const changed = values.some((value, index) => previousValues && !Object.is(value, previousValues[index]));

        if (changed) {
            return effectFunction();
        }
    }, values);
};

export default useChangeEffect;
