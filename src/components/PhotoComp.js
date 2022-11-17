import React from "react";
import "./Photoc.css";
const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <div className="comp d-flex flex-column">
        <img className="img" src={urls.regular} alt="not found" />
        <a
          className="credit btn btn-sm my-2 d-flex"
          target="_blank"
          rel="noreferrer"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.name}
        </a>
      </div>
    </>
  );
};
export default PhotoComp;
