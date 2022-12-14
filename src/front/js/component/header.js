import React from "react";
// import "../../img/set-of-tools-with-copy-space.jpg"
import imagenHeader from "../../img/set-of-tools-with-copy-space.jpg";
import checked from "../../img/cheque.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header-title text-center my-3"></div>

      <div
        className="container wraper-header position-relative rounded-3"
        style={{
          height: "60%",
          width: "100%",
        }}
      >
        <div
          className="check_container_header_question hidden-xs flex-column position-absolute me-60 p-3 rounded-3"
          style={{ Height: "60%", marginTop: "10px" }}
        >
          <h1> ¿Qué necesitas ? </h1>
        </div>
        <div className="check_container_header_buttom hidden-xs flex-column position-absolute me-60 p-3 rounded-3">
          {" "}
          <div className="container-fluid d-flex justify-content-center mb-3 px-3">
            <div className="col">
              <Link
                to="/workers-list"
                type="button"
                className="btn mail-button mt-2"
              >
                Busca profesional
              </Link>
            </div>
            <div className="col">
              <Link
                to="/request"
                type="button"
                className="btn mail-button mt-2"
              >
                Publica un anuncio
              </Link>
            </div>
          </div>
        </div>
        <div className="check_container_header hidden-xs flex-column w-50 position-absolute me-60 p-3 rounded-3">
          <div className="text-container " style={{ Height: "60%" }}>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Encuentra el mejor profesional cerca de ti.
              </span>
            </div>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Más de un millón de usuarios satisfechos.
              </span>
            </div>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Con garantía de calidad.
              </span>
            </div>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Tú mandas, propón tu proyecto y los profesionales te
                contactaran.
              </span>
            </div>
          </div>
        </div>

        <img
          src={imagenHeader}
          className="img-fluid d-flex justify-content-center rounded-3"
          alt="..."
          style={{
            objectFit: "cover",
            height: "600px",
            width: "100%",
          }}
        ></img>
      </div>
    </>
  );
};
