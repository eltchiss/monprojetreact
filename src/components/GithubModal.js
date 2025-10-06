import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Modal = ({ user }) => {
  return (
    <div
      className="modal fade"
      id="profileModal"
      tabIndex="-1"
      aria-labelledby="profileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-light border-secondary">
          {/* Header */}
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold" id="profileModalLabel">
              Mon profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {user ? (
              <div className="row align-items-center">
                {/* Avatar */}
                <div className="col-md-5 text-center mb-3 mb-md-0">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="img-fluid rounded-3 shadow"
                    style={{ maxHeight: "320px" }}
                  />
                </div>

                {/* Infos */}
                <div className="col-md-7 text-start">
                  {/* Nom */}
                  <div className="py-2 border-bottom border-secondary">
                    <i className="bi bi-person me-2"></i>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info text-decoration-none fw-semibold"
                    >
                      {user.name || user.login}
                    </a>
                  </div>

                   {/* Géo*/}
                 
                    <div className="py-2 border-bottom border-secondary">
                      <i class="bi bi-geo-alt"></i>
                    </div>
                  

                  {/* Bio */}
                  {user.bio && (
                    <div className="py-2 border-bottom border-secondary">
                      <i class="bi bi-card-text me-2"></i>
                      <span style={{ color: "#cfd8dc" }}>{user.bio}</span>
                    </div>
                  )}

                  {/* Repositories */}
                  <div className="py-2 border-bottom border-secondary">
                    <i className="bi bi-box me-2"></i>
                    <span>
                      Repositories :{" "}
                      <strong>{user.public_repos ?? "0"}</strong>
                    </span>
                  </div>

                  {/* Followers */}
                  <div className="py-2 border-bottom border-secondary">
                    <i className="bi bi-people me-2"></i>
                    <span>
                      Followers : <strong>{user.followers}</strong>
                    </span>
                  </div>

                  {/* Following */}
                  <div className="py-2">
                    <i className="bi bi-person-check me-2"></i>
                    <span>
                      Following : <strong>{user.following}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center">Chargement...</p>
            )}
          </div>

          {/* Footer */}
          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
