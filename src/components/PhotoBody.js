import React, { useContext, useEffect } from "react";
import SplashContext from "../contextapi/spcontext";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoComp from "./PhotoComp";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const Body = (props) => {
  const context = useContext(SplashContext);
  const { data, addData ,changeData} = context;
  const loading = useSelector((state) => state.changeLoading);
  const location=useLocation();
  useEffect(() => {
    if(props.val)
    changeData(props.val);
     // This helps in running the useEffect after every location or href change
    // eslint-disable-next-line
  }, [location]);

  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <InfiniteScroll
          dataLength={data.length}
          next={addData}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={data.length < 100}
          // loader={<h4>Loading...</h4>}
        ></InfiniteScroll>
        <div className="feed container">
          <ul className="columnUl row">
            {data.map((photo) => (
              <div className="col  my-1 text-center">
                <li key={photo.id + "st"} className="li">
                  <PhotoComp key={photo.id} photo={photo} />
                </li>
              </div>
            ))}
          </ul>
        </div>
        {loading && <Loader />}
      </>
    );
  }
};
export default Body;
