const Modal = ({ user }) => {
  return (
  <div
  className="modal fade"
  id="profileModal"
  tabIndex="-1"
  aria-labelledby="profileModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="profileModalLabel">
          Profil GitHub
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Fermer"
        ></button>
      </div>

      <div className="modal-body text-center">
        {user ? (
          <>
            {/* ✅ Photo de profil */}
            <img
              src={user.avatar_url}
              alt={user.login}
              className="rounded-circle mb-3"
              width="120"
              height="120"
            />

            {/* ✅ Nom ou login */}
            <h4>{user.name || user.login}</h4>

            {/* ✅ Description / bio */}
            {user.bio && <p className="text-muted">{user.bio}</p>}

            {/* ✅ Followers */}
            <p>
              <strong>Followers:</strong> {user.followers} |{" "}
              <strong>Following:</strong> {user.following}
            </p>

            {/* ✅ Lien GitHub */}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger mt-2"
            >
              Voir le profil GitHub
            </a>
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default Modal;
