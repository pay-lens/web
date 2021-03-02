import { useReducer } from 'react';

/**
 * This hook makes it easy to toggle a boolean value (true/false) in state. It also shows how
 * useReducer can be, even for simple use-cases. If we were to utilize useState instead of useReducer
 * then we'd need to create a second function for toggling the boolean value. We'd also need to wrap
 * that second function with useCallback to unsure it has a stable identity. We don't need to worry
 * about that with useReducer because the dispatch function it returns always has a stable identity.
 * To make this easier to understand I've created another example with the useState method. Check it
 * out and compare. It's perfectly fine to use that method instead as long as you understand the
 * pitfalls to avoid.
 */
export default function useToggle(initialValue = false){
  // Returns the tuple [state, dispatch]
  // Normally with useReducer you pass a value to dispatch to indicate what action to
  // take on the state, but in this case there's only one action.
  return useReducer((state) => !state, initialValue);
}
