import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ModalForm from "./modalForm";
import houseIcon from "../../img/icons/hogar.png";

export const WorkPostForWorker = ({
  description,
  location,
  title,
  work_id,
  user_id,
  url,
}) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-card">
              <div className="work-title"> Título:{title}</div>
              <div className="work-description">Descripción:{description}</div>
              <div className="work-location"> Ubicación:{location} </div>
              <span>
                <img className="sector-icon" src={houseIcon}></img>
              </span>

              <div>
                <a href={url} download>
                  <ModalForm id={work_id} />
                </a>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};