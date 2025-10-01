import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center text-lg-start fixed-bottom">
      {/* Grid container */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Jean Doe</h5>
            <ul className="list-unstyled mb-0">
              <li>40 rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>jeanne.doe@gmail.com</li>
            </ul>
          </div>


          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="link-light text-decoration-none">Accueil</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Services</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Portfolio</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Mentions légales</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mes dernières réalisations</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="link-light text-decoration-none">Fresh food</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Restaurant Akira</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Espace bien-être</a></li>
              <li><a href="#!" className="link-light text-decoration-none">SEO</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Création d'une API</a></li>
              <li><a href="#!" className="link-light text-decoration-none">Maquette d'un site</a></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
    
  );
};

export default Footer;