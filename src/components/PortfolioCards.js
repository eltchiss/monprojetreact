
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../CSS/Portfolio.css"; 
import "../CSS/Cards.css";

import freshFood from "../img/fresh-food.jpg";
import japon from "../img/restaurant-japonais.jpg";
import bienetre from "../img/espace-bien-etre.jpg";
import seo from "../img/seo.jpg";
import coder from "../img/coder.jpg";
import maquettes from "../img/screens.jpg";

const projects = [
  {
    title: "Fresh Food",
    subtitle: "Site de vente de produits frais en ligne",
    img: freshFood,
    foot: "Site réalisé avec PHP et MySQL",
  },
  {
    title: "Restaurant Akira",
    subtitle: "Site de vente de produits frais en ligne",
    img: japon,
    foot: "Site réalisé avec WordPress",
  },
  {
    title: "Espace bien-être",
    subtitle: "Site de vente de produits frais en ligne",
    img: bienetre,
    foot: "Site réalisé avec LARAVEL",
  },
  {
    title: "SEO",
    subtitle: "Amélioration du référencement d'un site e-commerce",
    img: seo,
    foot: "Utilisation des outils SEO",
  },
  {
    title: "Création d'une API",
    subtitle: "Création d'une API RESTFULL publique",
    img: coder,
    foot: "PHP - SYMFONY",
  },
  {
    title: "Maquette d'un site web",
    subtitle: "Création du prototype d'un site",
    img: maquettes,
    foot: "Réalisé avec FIGMA",
  },
];

export default function PortfolioCards() {
  return (
    <section id="portfolio-cards" className="py-5">
      <Container>
        <h2 className="fw-bold text-center">Mon offre de services</h2>
        <p className="text-muted text-center">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <hr
          className="mx-auto"
          style={{ width: "60px", borderTop: "3px solid #007bff" }}
        />

        <Row className="g-4">
          {projects.map((p, idx) => (
            <Col key={idx} lg={4} md={6} sm={12}>
              <Card className="h-100 shadow-sm portfolio-card">
                <div className="card-img-wrap">
                  <Card.Img variant="top" src={p.img} alt={p.title} />
                </div>

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center fw-bold mb-2">{p.title}</Card.Title>
                  <Card.Text className="text-center text-muted small mb-3">{p.subtitle}</Card.Text>

                  <div className="mt-auto text-center">
                    <Button variant="primary" size="sm">Voir le site</Button>
                  </div>
                </Card.Body>

                <Card.Footer className="bg-white border-top-0 text-muted small text-center">
                  {p.foot}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
