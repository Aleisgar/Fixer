import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import obrero from "../../img/icons/obrero.png";
import { useParams } from "react-router-dom";
import { Rating } from "../component/rating.js";
import imagenUser from "../../img/imagenUser.png";

export const Workerprofile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [showRating, setShowRating] = useState(false);

  // funciones que nos traen los trabajadores y las valoraciones
  useEffect(() => {
    actions.getworker(parseInt(id));
    actions.getRating(parseInt(id));
    actions.consultUserProfile();
  }, []);
  console.log(store.consultUser);
  // VALORACIONES
  // calculamos el promedio de las valoraciones

  const ratingAverage = (ratings) => {
    let sum = 0;
    for (let rating of ratings) {
      sum += rating;
    }
    return sum / ratings.length;
  };
  let numeros = store.ratings.map((item) => {
    return item.rating;
  });
  console.log(numeros);
  let numRating = ratingAverage(numeros);

  // creamos una variable con un objeto de estilo
  const activeStar = {
    fill: "yellow",
  };
  console.log(store.ratings);
  console.log(numRating);
  return (
    <>
      {/* Card con los datos de la empresa o trabajador */}
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3 fw-bold">Perfil de Empresa</h3>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-8 mx-auto">
            <div className="post-box">
              <div className="post-photo d-flex justify-content-center ">
                {store.workerprofile.pictures === null ? (
                  <img
                    src={obrero}
                    className="card-img-top mx-auto mt-2 "
                    alt="imagen obrero"
                    style={{ width: "150px" }}
                  />
                ) : (
                  <img
                    src={store.workerprofile.pictures}
                    className="card-img-top mx-auto mt-2 rounded-3"
                    alt="imagen "
                    style={{ width: "150px" }}
                  />
                )}
              </div>
              <div className="post-card m-2 pt-2 mt-2">
                <div className="worker-name d-flex">
                  <div className="fw-bold">Nombre :</div>
                  <div className="ms-3">{store.workerprofile.name}</div>
                </div>
                <div className="worker-email d-flex">
                  <div className="fw-bold">Email :</div>
                  <div className="ms-2"> {store.workerprofile.email}</div>
                </div>
                <div className="worker-city d-flex">
                  <div className="fw-bold">Ciudad :</div>
                  <div className="ms-3"> {store.workerprofile.city}</div>
                </div>
                <div className="worker-sector d-flex">
                  <div className="fw-bold">Sector:</div>
                  <div className="ms-3"> {store.workerprofile.sector}</div>
                </div>
                <div className="worker-tlf d-flex">
                  <div className="fw-bold">Número Tlf :</div>
                  <div className="ms-3">{store.workerprofile.tlf_number} </div>
                </div>
                {/* Componente con el sistema de valoraciones que tiene dos props: una que pasa el
                valor promedio de valoraciones y otra el objeto de estilo amarillo */}

                <Rating value={numRating} color={activeStar} />

                <a href="#ratings-list" onClick={() => setShowRating(true)}>
                  Ver más valoraciones
                </a>

                <div className="d-flex justify-content-between mt-3">
                  <a
                    className="ancorforbuttoncontact btn whatsapp-button "
                    type="button"
                    href={`https://wa.me/${store.workerprofile.tlf_number}`}
                    target="_blank"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="ancorforbuttoncontact btn mail-button"
                    role="button"
                    type="button"
                    href={`mailto:${store.workerprofile.email}?subject=Muy buenas ${store.workerprofile.name}!`}
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Muestra el listado de valoraciones para ese trabajador */}
        <a id="ratings-list">
          {showRating
            ? store.ratings.map((item, index) => (
                <div className="row mt-3" key={index}>
                  <div className="col-10 col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <div className="rating-box">
                      <div className="d-flex justify-content-between p-2 w-100 mt-1">
                        <img
                          src={
                            item.user.pictures == null
                              ? imagenUser
                              : item.user.pictures
                          }
                          style={{
                            width: "4rem",
                            height: "4rem",
                            objectFit: "cover",
                            maxWidth: "4rem",
                          }}
                          className="img-rating border-2 border border-warning rounded-circle "
                          alt="..."
                        />
                        <strong>
                          <p>{item.user.name}</p>
                        </strong>
                        <Rating value={item.rating} color={activeStar} />
                      </div>
                      <div
                        className="comment d-block"
                        style={{ right: "50px" }}
                      >
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </a>
      </div>
    </>
  );
};
