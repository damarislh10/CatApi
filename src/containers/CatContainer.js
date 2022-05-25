//map
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatCard } from "../components/CatCard";
import { listCatsAsync } from "../redux/actions/actionCats";
import { ContainerCard, ListCard, Title } from "../styled/styledcomponents";

export const CatContainer = () => {
  const { cats } = useSelector((state) => state.cats);
  console.log(cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCatsAsync());
  }, []);

  return (
    <div>
        <Title>Todos los gatos</Title>
        <ContainerCard>

        {cats.map((cat, index) => (
          <ListCard>
            <CatCard key={index} cat={cat} />
          </ListCard>
        ))}
      </ContainerCard>
    </div>
  );
};
