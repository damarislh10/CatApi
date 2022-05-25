import React, { useEffect } from 'react'
import GetData from './hooks/getData';

export const ListCats = () => {
    const { getCat} = GetData();

    useEffect(() => {
        console.log();
    }, [])
  return (
    <div>ListCats</div>
  )
}
