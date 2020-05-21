import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// Action creator
export const fetchPosts = () => async (dispatch /*, getState */) => {
  const response = await jsonPlaceholder.get("/posts");

  // Return an action
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

// // method 1: using private function
// //         disadvantage: if any change is made to user it wont refactor it into state
// export const fetchUser = (id) => dispatch=> _fetchUser(id,dispatch);

// const _fetchUser=_.memoize(async (id,dispatch) => {

//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });

// });

// method 2: using parent function

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // // alternate lodash chain statement below
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
