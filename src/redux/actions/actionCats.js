import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesCats } from "../types/types";

export const listCatsAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "cats"));
    const cats = [];
    querySnapshot.forEach((doc) => {
      cats.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(cats));
  };
};

export const listSync = (cats) => {
  return {
    type: typesCats.list,
    payload: cats,
  };
};
