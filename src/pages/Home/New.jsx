import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataQuran } from "../../features/alquran/alquranSlice";

const New = () => {
  const dispatch = useDispatch();
  const dataQuran = useSelector((state) => {
    return state.alQuran;
  });
  console.log(dataQuran);

  useEffect(() => {
    dispatch(fetchDataQuran());
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default New;
