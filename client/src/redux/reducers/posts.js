// A reducer is a function that accepts a state and an action
// based on the action type, return action (CREATE) or state
// changed by the action
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
