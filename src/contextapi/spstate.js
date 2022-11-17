import SplashContext from "./spcontext";
import React, { useState } from "react";
import { createApi } from "unsplash-js";
import { setProgress, setLoader } from "../store/ActionCreators";
import { useDispatch } from "react-redux";
const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "-XKmgDQyfVO98qcJ_UEZEKVTq8kLsveUgR3ByRefPGI",
});
function SpState(props) {
  const [p, setp] = useState(1);
  const [data, setPhotosResponse] = useState(null);
  const [value, setValue] = useState("airplane");
  const dispatch = useDispatch();
  const changeData = (prop) => {
    if (prop.length >= 3) {
      setPhotosResponse([]);
      setValue(prop);
      dispatch(setLoader(true));
      dispatch(setProgress(30));
      api.search
        .getPhotos({
          query: prop,
          page: 1,
          perPage: 21,
          orientation: "landscape",
        })
        .then((result) => {
          dispatch(setProgress(70));
          setPhotosResponse(result.response.results);
          dispatch(setLoader(false));
          dispatch(setProgress(100));
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
  };
  const addData = () => {
    console.log("trying to add data");
    dispatch(setLoader(true));
    // dispatch(setProgress(70));
    api.search
      .getPhotos({
        query: value,
        page: p + 1,
        perPage: 21,
        orientation: "landscape",
      })
      .then((result) => {
        setp(p + 1);
        setPhotosResponse(data.concat(result.response.results));
        dispatch(setLoader(false));
        // dispatch(setProgress(100));
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };
  return (
    <SplashContext.Provider value={{ data, changeData, addData }}>
      {props.children}
    </SplashContext.Provider>
  );
}
export default SpState;
