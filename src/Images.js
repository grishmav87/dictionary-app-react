import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="images">
        <div className="row">
          {props.images.map(function (photo, index) {
            return (
              <div className="col-md-3 mb-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.portrait}
                    className="img-fluid"
                    alt="search-results"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
