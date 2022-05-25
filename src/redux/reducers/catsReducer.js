import { typesCats } from "../types/types";

const initialState = {
  cats: [],
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesCats.add:
      return {
        cats: [action.payload],
      };
    case typesCats.list:
      return {
        cats: [...action.payload],
      };

    default:
      return state;
  }
};
