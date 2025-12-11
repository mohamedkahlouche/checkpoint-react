import React from "react";

export default function App() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/images/photo-tech.avif')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Innovation Technologique</h1>
          <p className="mb-5 text-base-content text-xl ">
            Découvrez nos solutions tech innovantes qui transforment vos idées
            en réalité digitale. Notre équipe d'experts crée des expériences
            utilisateur exceptionnelles.
          </p>
          <button className="btn btn-primary btn-lg">Démarrer un projet</button>
        </div>
      </div>
    </div>
  );
}
