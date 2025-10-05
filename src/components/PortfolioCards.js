import "../CSS/Portfolio.css"; 
import "../CSS/Cards.css";

import freshFood from "../img/fresh-food.jpg";
import japon from "../img/restaurant-japonais.jpg";
import bienetre from "../img/espace-bien-etre.jpg";
import seo from "../img/seo.jpg";
import coder from "../img/coder.jpg";
import maquettes from "../img/screens.jpg";

export default function PortfolioCards() {
  return (
    <section id="portfolio-cards" className="py-5">
      <div className="container">
        <div className="row g-4">

          {/* Fresh Food */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex flex-column h-100">
              <img src={freshFood} className="card-img-top" alt="Restaurant" />
              <div className="card-body text-center">
                <h5 className="card-title">Fresh Food</h5>
                <p className="card-text">Site de vente de produits frais en ligne.</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
              </div>
              <div className="card-footer text-center mt-auto"> 
                <small className="text-muted">Site réalisé avec PHP et MySQL</small>
              </div>
            </div>
          </div>

          {/* Restaurant Akira */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex flex-column h-100">
              <img src={japon} className="card-img-top" alt="Restaurant japonais" />
              <div className="card-body text-center">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Site pour un restaurant japonais.</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
              </div>
              <div className="card-footer text-center mt-auto"> 
                <small className="text-muted">Site réalisé avec WordPress</small>
              </div>
            </div>
          </div>

          {/* Espace bien-être */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex flex-column h-100">
              <img src={bienetre} className="card-img-top" alt="Espace bien-être" />
              <div className="card-body text-center">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">Site pour un espace bien-être.</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
              </div>
              <div className="card-footer text-center mt-auto"> 
                <small className="text-muted">Site réalisé avec Laravel</small>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex flex-column h-100">
              <img src={seo} className="card-img-top" alt="SEO" />
              <div className="card-body text-center">
                <h5 className="card-title">SEO</h5>
                <p className="card-text">Amélioration du référencement d'un site e-commerce.</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
              </div>
              <div className="card-footer text-center mt-auto"> 
                <small className="text-muted">Utilisation des outils SEO</small>
              </div>
            </div>
          </div>

          {/* Création d'une API */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex flex-column h-100">
              <img src={coder} className="card-img-top" alt="Création d'une API" />
              <div className="card-body text-center">
                <h5 className="card-title">Création d'une API</h5>
                <p className="card-text">Création d'une API Restful publique.</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
              </div>
              <div className="card-footer text-center mt-auto"> 
                <small className="text-muted">PHP - Symfony</small>
              </div>
            </div>
          </div>

          {/* Maquette d'un site web */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex flex-column h-100">
              <img src={maquettes} className="card-img-top" alt="Maquette d'un site web" />
              <div className="card-body text-center">
                <h5 className="card-title">Maquette d'un site web</h5>
                <p className="card-text">Création du prototype d'un site.</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
              </div>
              <div className="card-footer text-center mt-auto"> 
                <small className="text-muted">Réalisé avec Figma</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
