import React, { useContext } from "react";
import { Context } from "../store/appContext";
import obrero from "../../img/icons/obrero.png";
import { Link } from "react-router-dom";

export const CardWorker = ({ name, sector, image, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        {image === null ? (
          <img
            src={obrero}
            className="card-img-top mx-auto mt-2"
            alt="imagen obrero"
            style={{ width: "200px" }}
          />
        ) : (
          <img src={image} className="card-img-top" alt="imagen " />
        )}

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{sector}</p>
          <Link to={`/workerprofile/${id}`} className="btn btnHeader">
            Leer más
          </Link>
        </div>
      </div>
    </>
  );
};
