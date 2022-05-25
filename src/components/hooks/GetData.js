import React, { useEffect, useState } from "react";
import axios from "axios";
import { urlCat } from "../../helpers/url";

const GetData = () => {
  const [dataCat, setdataCat] = useState([]);

  const getCat = async () => {
    const res = await axios.get(urlCat);
    setdataCat(res.data);
  };



  return {getCat};
};

export default GetData;
