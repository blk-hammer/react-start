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
