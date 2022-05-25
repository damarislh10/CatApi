//map
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatCard } from "../components/CatCard";
import { listCatsAsync } from "../redux/actions/actionCats";
import { ContainerCard } from "../styled/styledcomponents";

export const CatContainer = () => {
  const { cats } = useSelector((state) => state.cats);
  console.log(cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCatsAsync());
  }, []);

  return (
    <div>
      {cats.map((cat, index) => (
        <CatCard key={index} cat={cat} />
      ))}
    </div>
  );
};
