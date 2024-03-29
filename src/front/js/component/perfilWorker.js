import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PhotoProfile } from "./photoProfile";
import obrero from "../../img/icons/obrero.png";

const PerfilWorker = () => {
  const { store, actions } = useContext(Context);
  const regions = store.regions;

  //DATOS A EDITAR DE USUARIO TRABAJADOR
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [adress, setAdress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [tlf_number, setTlf] = useState("");
  const [photoProfile, setPhotoProfile] = useState("");

  console.log("username " + username);
  console.log(store.editWorkerGet);

  const handleSubmitEditWorker = (e) => {
    actions.editWorkerProfile(
      username,
      email,
      city,
      sector,
      adress,
      tlf_number,
      postcode
    );
  };
  useEffect(() => {
    setUsername(store.editWorkerGet.name);
    setEmail(store.editWorkerGet.email);
    setCity(store.editWorkerGet.city);
    setSector(store.editWorkerGet.sector);
    setAdress(store.editWorkerGet.adress);
    setPostcode(store.editWorkerGet.postcode);
    setPhotoProfile(store.editWorkerGet.pictures);
    setTlf(store.editWorkerGet.tlf_number);
  }, [store.editWorkerGet]);

  return (
    <div
      className=" container border border-profile border-warning border-2 rounded-3 "
      style={{ width: "610px", height: "650px", marginTop: "80px" }}
    >
      <div className="container p-3 d-flex  justify-content-end">
        <div className="container  d-flex " style={{ marginTop: "110px" }}>
          <div className="col-10 mt-4">
            <p className=" ms-4 fw-bold text-decoration-underline">
              Datos de la empresa:
            </p>
          </div>
          <div className="col text-end">
            <PhotoProfile />
          </div>
        </div>
        <div className="row-3">
          {store.editWorkerGet.pictures == null ? (
            <img
              src={obrero}
              className="card-img-top mx-auto mt-2"
              alt="imagen obrero"
              style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
            />
          ) : (
            <img
              src={store.editWorkerGet.pictures}
              className="ms-2 img border-2 border border-warning rounded-circle rounded-circle-box"
              style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
              alt="foto trabajador"
            />
          )}
        </div>
      </div>
      <div>
        <ul>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Nombre:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.name}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Correo electrónico:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.email}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Ciudad:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.city}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Sector:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.sector}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Dirección:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.adress}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Código Postal:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.postcode}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Contacto:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.editWorkerGet.tlf_number}</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="container mb-3 pb-2">
        <button
          type="button"
          className="d-grid gap-1 col-4 mx-auto fw-bold mail-button "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          data-backdrop="false"
          data-bs-whatever="@mdo"
        >
          Editar datos
        </button>
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-backdrop="false"
        >
          {/* //MODAL */}
          <div className=" modal-dialog modal-dialog-scrollable ">
            <div
              // id="exampleModal2"
              className="modal-content modal-content-user  border-2 border-warning"
            >
              <div className="modal-header  border-1 border-warning ">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">
                  Mis datos
                </h5>
                <button
                  type="button"
                  className="btn-close btnHeader"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control form form-control-request"
                      id="recipient-name"
                      defaultValue={username ? username : ""}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="col-form-label fw-bold">email:</label>
                    <input
                      type="text"
                      className="form-control form form-control-request"
                      id="recipient-name"
                      defaultValue={email ? email : ""}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label fw-bold">ciudad:</label>
                    <select
                      className="select w-100 form-control-request form form-control"
                      onChange={(e) => setCity(e.target.value)}
                      required
                    >
                      <option value="1">
                        {store.editWorkerGet.city
                          ? store.editWorkerGet.city
                          : "Provincia"}
                      </option>
                      {regions.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label fw-bold">sector:</label>
                    <select
                      className="select w-100 form form-control-request form-control"
                      defaultValue={store.editWorkerGet.sector || ""}
                      onChange={(e) => setSector(e.target.value)}
                    >
                      <option selected>
                        {store.editWorkerGet.sector
                          ? store.editWorkerGet.sector
                          : "Elije una opción"}
                      </option>
                      <option value="Fontanería">Fontanería</option>
                      <option value="Carpintería">Carpintería</option>
                      <option value="Pintura">Pintura</option>
                      <option value="Electricidad">Electricidad</option>
                      <option value="Climatización">Climatización</option>
                      <option value="Mudanzas">Mudanzas</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label fw-bold">Dirección:</label>
                    <input
                      type="text"
                      className="form-control  form form-control-request"
                      id="recipient-name"
                      defaultValue={adress ? adress : ""}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="col-form-label fw-bold">
                      Numero de contacto:
                    </label>
                    <input
                      type="text"
                      className="form-control form form-control-request"
                      id="recipient-name"
                      defaultValue={tlf_number ? tlf_number : ""}
                      onChange={(e) => setTlf(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label fw-bold">
                      Codigo Postal:
                    </label>
                    <input
                      type="text"
                      className="form-control form form-control-request"
                      id="recipient-name"
                      defaultValue={postcode ? postcode : ""}
                      onChange={(e) => setPostcode(e.target.value)}
                    />
                  </div>
                </form>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn fw-bold mail-button btn-sm"
                    data-bs-dismiss="modal"
                    onClick={handleSubmitEditWorker}
                  >
                    aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilWorker;
