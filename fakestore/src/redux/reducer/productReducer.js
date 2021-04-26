import { ActionTypes } from "../constants/action-types";

const initialState = [
  {
    id: 1,
    name: "john doe",
  },
  {
    id: 2,
    name: "john doe",
  },
];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
