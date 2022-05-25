import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listCatsAsync } from '../redux/actions/actionCats';

export const ListCats = () => {
    const { cats } = useSelector((state) => state.cats);
    console.log(cats);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(listCatsAsync());
    }, []);

  return (
    <div>ListCats</div>
  )
}
