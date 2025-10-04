import Accordion from 'react-bootstrap/Accordion';
import "../CSS/legal.css";

function Accordions() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mentions légales</h2>
      <hr className="mx-auto" style={{ width: "150px", border: "2px solid #007bff" }} />

      <Accordion defaultActiveKey="0">
        {/* Éditeur du site */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <p><strong>John Doe</strong></p>     
          </Accordion.Body>
        </Accordion.Item>

        {/* Hébergeur */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <p>Nom de l’hébergeur<br />
              Adresse complète<br />
              Téléphone<br />
              Site web</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Crédits */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p className="fw-bold fs-2">Crédits</p>
            <p>Ce site à été  réalisé par Jeanne Doe, <a href="https://www.centre-europeen-formation.fr/">étudiante au centre européen de formation.</a></p>
            <p>Les images utilisées sur ce site sont libres de droits et obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
            <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John Doe Icons erstellt von Freepik - Flaticon</a></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Accordions;