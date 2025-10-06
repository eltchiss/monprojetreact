import { Link } from "react-router-dom";
import "../CSS/Footer.css";


const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center text-lg-start mt-auto">
      {/* Grid container */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Jeanne Doe</h5>
            <ul className="list-unstyled mb-0">
              <li>40 rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>jeanne.doe@gmail.com</li>
            </ul>
             {/*Réseaux sociaux*/}
          <div className="mt-3 social-icons">
              <a href="https://github.com/github-john-doe" target="_blank" rel="nofollow noopener noreferrer" className="me-3 fs-4">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="nofollow noopener noreferrer" className="me-3 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="nofollow noopener noreferrer" className="fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Liens utiles</h5>
            <ul className="list-unstyled">
    <li><Link to="/" className="link-light text-decoration-none">Accueil</Link></li>
    <li><Link to="/service" className="link-light text-decoration-none">Services</Link></li>
    <li><Link to="/portfolio" className="link-light text-decoration-none">Portfolio</Link></li>
    <li><Link to="/legal" className="link-light text-decoration-none">Mentions légales</Link></li>
  </ul>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mes dernières réalisations</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/portfolio" className="link-light text-decoration-none">Fresh food</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">Restaurant Akira</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">Espace bien-être</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">SEO</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">Création d'une API</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">Maquette d'un site</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>

    
  );
};

export default Footer;