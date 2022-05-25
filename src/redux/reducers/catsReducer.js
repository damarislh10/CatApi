import { typesCats } from "../types/types";

const initialState = {
  cats: [],
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesCats.add:
      return {
        products: [action.payload],
      };
    case typesCats.list:
      return {
        products: [...action.payload],
      };

    default:
      return state;
  }
};
