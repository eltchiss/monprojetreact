import "../CSS/Cards.css";

function ServicesCard() {
  return (
    <div>
    
      {/* Titre sous la bannière */}
      <div className="text-center my-5">
        <h2 className="fw-bold">Mon offre de services</h2>
        <p className="text-muted">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <hr
          className="mx-auto"
          style={{ width: "200px", borderTop: "3px solid #0d6efd" }}
        />
      </div>

      {/* Section cartes services */}
      <div className="container pb-5">
        <div className="row">
          {/* UX Design */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm">
              <div className="mb-3 fs-1 text-primary">
                <i className="bi bi-pencil"></i>
              </div>
              <h5>UX Design</h5>
              <p className="text-muted">
                L’UX Design est une discipline qui consiste à concevoir des
                produits (sites web, applications mobiles, logiciels, objets connectés, etc.)
                en plaçant l’utilisateur au centre des préoccupations. 
                L'objetctif est de rendre l'expérience utilisateur la plus fluide et
                agréable possible. 
              </p>
            </div>
          </div>

          {/* Développement web */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm">
              <div className="mb-3 fs-1 text-primary">
                <i className="bi bi-code-slash"></i>
              </div>
              <h5>Développement web</h5>
              <p className="text-muted">
                Le développement de sites web consiste à créer des sites
                internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                et des frameworks (Bootstrap, React, Angular, etc.).
              </p>
            </div>
          </div>

          {/* Référencement */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm">
              <div className="mb-3 fs-1 text-primary">
                <i className="bi bi-search"></i>
              </div>
              <h5>Référencement</h5>
              <p className="text-muted">
                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web
                pour le faire remonter dans les résultats des moteurs de recherche
                (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum
                de visiteurs qualifiés sur le site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;