import { useState, useEffect } from "react";
import Modal from "./GithubModal";
import "../CSS/Hero.css";

const Hero = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Erreur API GitHub :", err));
  }, []);

  return (
    <section className="hero">
      <div>
        <h1>Bonjour, je suis Jane Doe</h1>
        <h2>Développeuse web full stack</h2>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#profileModal"
        >
          En savoir plus
        </button>
      </div>

      <Modal user={user} />
    </section>
  );
};

export default Hero;
