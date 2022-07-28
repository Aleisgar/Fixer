import React, { useEffect, useContext } from "react";
import { WorkPost } from "../component/workPost";
import { WorkPostForWorker } from "../component/workPostForWorker";
import { Context } from "../store/appContext";

export const PostedWorks = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.showWork();
  }, []);

  return (
    <>
      {store.usuario ? (
        <div className="container-works mx-auto">
          <h3 className="text-center mb-3">Estas son tus ofertas publicadas</h3>{" "}
          {store.work.length > 0
            ? store.work.map((item, index) => (
                <WorkPost
                  key={index}
                  description={item.description}
                  location={item.location}
                  sector={item.sector}
                  title={item.title}
                  user_id={item.user_id}
                  worker_id={item.worker_id}
                  work_id={item.id}
                  showButton={true}
                />
              ))
            : null}
        </div>
      ) : (
        <div className="container-works mx-auto">
          <h3 className="text-center mb-3"> Estas las ofertas en tu sector </h3>

          {store.work.length > 0
            ? store.work.map((item, index) => (
                <WorkPostForWorker
                  key={index}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  sector={item.sector}
                  user_id={item.user_id}
                  worker_id={item.worker_id}
                  work_id={item.id}
                />
              ))
            : null}
        </div>
      )}
    </>
  );
};
