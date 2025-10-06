import aboutImg from "../img/john-doe-about.jpg";

const About = () => {
  return (
    <section className="container my-5">
      <div className="card shadow p-4">
        <div className="row">
          {/* Colonne gauche */}
          <div className="col-md-6">
            <h3>À propos</h3>
            <img src={aboutImg} alt="portrait" className="img-fluid mb-3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              necessitatibus consectetur tempora perferendis nostrum ex delectus
              recusandae impedit aut iure enim. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Odio, necessitatibus consectetur
              tempora perferendis nostrum ex delectus recusandae impedit aut
              iure enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odio, necessitatibus consectetur tempora perferendis nostrum
              ex delectus recusandae impedit aut iure enim.
            </p>
          </div>

          {/* Colonne droite */}
          <div className="col-md-6">
            <h3>Mes compétences</h3>

            <p>HTML5 90%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>

            <p>CSS3 80%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                style={{ width: "80%" }}
              ></div>
            </div>

            <p>JavaScript 70%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>

            <p>PHP 60%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>

            <p>React 50%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
