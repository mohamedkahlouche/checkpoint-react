import React from "react";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
        {/* Barre de navigation - Fixée en haut avec effet de transparence et flou */}
        <nav className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-sm shadow-lg px-4 md:px-8">
          {/* Section gauche : Logo et nom de l'entreprise */}
          <div className="navbar-start">
            <div className="flex items-center gap-2">
              {/* Carré coloré avec dégradé comme élément visuel du logo */}
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
              {/* Nom de l'entreprise avec effet de texte dégradé */}
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechVision
              </span>
            </div>
          </div>

          {/* Section centrale : Liens de navigation (visible uniquement sur les grands écrans) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              {/* Lien Accueil avec icône maison */}
              <li>
                <a className="font-semibold hover:text-primary transition-colors duration-300">
                  <span className="mr-1">🏠</span> Accueil
                </a>
              </li>
              {/* Lien Services avec icône engrenage */}
              <li>
                <a className="font-semibold hover:text-primary transition-colors duration-300">
                  <span className="mr-1">⚙️</span> Services
                </a>
              </li>
              {/* Lien Contact avec icône téléphone */}
              <li>
                <a className="font-semibold hover:text-primary transition-colors duration-300">
                  <span className="mr-1">📞</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section droite : Bouton de connexion et menu mobile */}
          <div className="navbar-end">
            {/* Bouton de connexion avec taille responsive */}
            <button className="btn btn-primary btn-sm md:btn-md">
              Connexion
            </button>

            {/* Menu mobile - Menu déroulant visible uniquement sur les petits écrans */}
            <div className="dropdown dropdown-end lg:hidden">
              {/* Bouton hamburger pour ouvrir le menu mobile */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                {/* Icône hamburger SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              {/* Contenu du menu déroulant mobile */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Accueil</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Section Hero - Section d'accueil principale avec image de fond */}
        <section className="hero min-h-[90vh] relative overflow-hidden">
          {/* Arrière-plan avec dégradé de couleur superposé */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-base-100 to-accent/20"></div>
          {/* Image de fond technique avec faible opacité et effet de fusion */}
          <div className="absolute inset-0 bg-[url('/images/photo-tech.avif')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

          {/* Contenu centré de la section Hero */}
          <div className="hero-content text-center relative z-10 py-20">
            <div className="max-w-3xl">
              {/* Badge d'accentuation avec emoji fusée */}
              <div className="badge badge-primary badge-lg mb-6 p-4">
                🚀 Innovation Technologique
              </div>

              {/* Titre principal avec effet de dégradé dans le texte */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transformez Vos
                {/* Partie du titre en dégradé coloré */}
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Idées en Réalité
                </span>
              </h1>

              {/* Description de la section Hero */}
              <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                Découvrez nos solutions tech innovantes qui transforment vos
                idées en réalité digitale. Notre équipe d'experts crée des
                expériences utilisateur exceptionnelles.
              </p>

              {/* Boutons d'action principaux avec disposition responsive */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Bouton principal avec emoji fusée */}
                <button className="btn btn-primary btn-lg px-8 gap-2">
                  <span>🚀</span>
                  Démarrer un projet
                </button>
                {/* Bouton secondaire avec contour et emoji téléphone */}
                <button className="btn btn-outline btn-lg px-8 gap-2">
                  <span>📞</span>
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services - Présentation des services offerts */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* En-tête de la section Services */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Des solutions complètes pour propulser votre présence digitale
              </p>
            </div>

            {/* Grille de cartes de services avec disposition responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Carte 1 : Développement Web */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="card-body p-6 md:p-8">
                  {/* Icône avec dégradé et animation au survol */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🌐</span>
                  </div>
                  <h3 className="card-title text-xl font-bold mb-3">
                    Développement Web
                  </h3>
                  <p className="opacity-80 mb-4">
                    Applications modernes, rapides et sécurisées adaptées à vos
                    besoins spécifiques.
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-ghost btn-sm gap-2">
                      En savoir plus
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Carte 2 : UI/UX Design */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="card-body p-6 md:p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="card-title text-xl font-bold mb-3">
                    UI / UX Design
                  </h3>
                  <p className="opacity-80 mb-4">
                    Des interfaces intuitives et centrées utilisateur pour une
                    expérience optimale.
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-ghost btn-sm gap-2">
                      En savoir plus
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Carte 3 : Solutions Cloud */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="card-body p-6 md:p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">☁️</span>
                  </div>
                  <h3 className="card-title text-xl font-bold mb-3">
                    Solutions Cloud
                  </h3>
                  <p className="opacity-80 mb-4">
                    Scalabilité et performance maximales pour vos projets les
                    plus ambitieux.
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-ghost btn-sm gap-2">
                      En savoir plus
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de contact - Section pour contacter l'entreprise */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Carte contenant le formulaire avec dégradé et ombre */}
            <div className="card lg:card-side bg-gradient-to-br from-base-100 to-base-200 shadow-2xl">
              <div className="card-body p-6 md:p-12">
                {/* En-tête du formulaire avec titre coloré */}
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-primary">Contactez</span>-nous
                  </h2>
                  <p className="opacity-80">
                    Prêt à transformer votre vision en réalité ? Parlons-en !
                  </p>
                </div>

                {/* Formulaire de contact avec gestion des champs */}
                <form className="space-y-6">
                  {/* Grille responsive pour les champs nom et email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          Votre nom
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        className="input input-bordered w-full focus:input-primary"
                      />
                    </div>

                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          Votre email
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="jean@exemple.com"
                        className="input input-bordered w-full focus:input-primary"
                      />
                    </div>
                  </div>

                  {/* Champ de texte pour le message */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Votre message
                      </span>
                    </label>
                    <textarea
                      placeholder="Décrivez votre projet..."
                      className="textarea textarea-bordered w-full h-32 focus:textarea-primary"
                    />
                  </div>

                  {/* Section inférieure du formulaire avec indicateur et bouton */}
                  <div className="flex items-center justify-between pt-4">
                    {/* Indicateur visuel de temps de réponse */}
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      Réponse garantie sous 24h
                    </div>
                    {/* Bouton de soumission du formulaire */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-8 gap-2"
                    >
                      <span>📤</span>
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Pied de page de l'application */}
        <footer className="footer footer-center bg-base-300 text-base-content p-10">
          {/* Grille responsive pour l'organisation du contenu du footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne 1 : Informations de la marque */}
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
                <span className="text-xl font-bold">TechVision</span>
              </div>
              <p className="opacity-80 mt-2">
                Innovation technologique au service de vos projets
              </p>
            </div>

            {/* Colonne 2 : Liens rapides de navigation */}
            <div>
              <div className="flex gap-6">
                <a className="link link-hover">À propos</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Contact</a>
              </div>
            </div>

            {/* Colonne 3 : Copyright avec année dynamique */}
            <div>
              <p>
                © {new Date().getFullYear()} TechVision. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
