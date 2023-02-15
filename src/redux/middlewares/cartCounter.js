// The following function is called: carry function
const cartCounter = (store) => (next) => (action) => {
    console.log("current state", store.getState());
    console.log("Action", action);

    return next(action); // we have to return the next.
}

export default cartCounter;
