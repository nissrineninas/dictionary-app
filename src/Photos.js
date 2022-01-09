import React from "react";

export default function Photos(props) {
  console.log(props.pics);
  if (props.pics) {
    return (
      <div className="container photos">
        <div className="row">
          {props.pics.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-5">
                <img className="img-fluid pt-3" src={photo.src.landscape} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
