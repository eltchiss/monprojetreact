import "../CSS/legal.css";

function Accordions() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-2">Mentions légales</h2>
      <hr
        className="mx-auto"
        style={{ width: "200px", border: "2px solid #0d6efd" }}
      />

      <div className="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Editeurs du site
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                <strong>Jeanne Doe</strong>
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
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <h2>alwaysdata</h2>
              <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <i class="bi bi-globe"></i>
              <a
                href="https://www.alwaysdata.com/fr/"
                target="_blank"
                class="ms-2"
              >
                www.alwaysdata.com
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Ce site à été réalisé par Jeanne Doe,{" "}
                <a href="https://www.centre-europeen-formation.fr/">
                  étudiante au centre européen de formation.
                </a>
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et
                obtenues sur le site{" "}
                <a href="https://pixabay.com/fr/">Pixabay</a>
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">
                  John Doe Icons erstellt von Freepik - Flaticon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordions;
