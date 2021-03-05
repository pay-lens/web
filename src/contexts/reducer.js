/**
 * Set a custom reducer for updating the environment tree local storage cache and state. Setting the new value to null will reset the data.
 *
 * @param {object} envTree
 * @param {object} newEnvTree
 */
let reducer = (envTree, newEnvTree) => {
    if (newEnvTree === null) {
        localStorage.removeItem(localStorageKey);
        return initialLevelState;
    }

    return { ...envTree, ...newEnvTree };
};

export default reducer;
