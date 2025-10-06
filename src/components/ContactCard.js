import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../CSS/Contact.css";

const ContactCard = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-3">Contact</h2>
      <p className="text-center mb-4">
        Pour me contacter en vue d’un entretien ou d’une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <hr
        className="mx-auto"
        style={{width: "200px", borderTop: "3px solid #0d6efd" }}
      />

      <Row className="shadow p-4 bg-white rounded">
        {/* Formulaire de contact */}
        <Col md={6} className="mb-4">
          <h5 className="mb-3 pb-2 custom-border">Formulaire de contact</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Votre nom" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Votre adresse email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Control
                type="tel"
                placeholder="Votre numéro de téléphone"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control type="text" placeholder="Sujet" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={15}
                placeholder="Votre message"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>

        {/* Coordonnées */}
        <Col md={6}>
          <h5 className="mb-3 pb-2 custom-border">Mes coordonnées</h5>
          <p>
            <strong>John Doe</strong>
          </p>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-map me-2"></i>
            <span>40 rue Laure Diebold</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-geo-alt me-2"></i>
            <span>69009 Lyon, France</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-phone me-2"></i>
            <span>10 20 30 40 50</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-envelope-at me-2"></i>
            <span>jeanne.doe@gmail.com</span>
          </div>

          {/* Google Maps */}
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.739451269!2d4.796403076370064!3d45.77894817108167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebb5b25f5e4f%3A0x8f2adf64c1b7c9a4!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1696680900000!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactCard;
