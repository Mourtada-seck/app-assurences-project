import React, { useState } from "react";
import "./login-style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //  🔥🔥🔥🔥🔥 Implémenter la logique de connexion
    console.log("Tentative de connexion avec:", {
      email,
      password,
      rememberMe,
    });
    alert(`voir les info saisi 👇
        mot de passe :👉 ${password}
        mail :👉 ${email}
      `)
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="login-card">
              <div className="login-header">
                <h2 className="fw-bold mb-3">Bienvenue 👋</h2>
                <p className="mb-0">
                  Connectez-vous pour accéder à votre compte
                </p>
              </div>
              <div className="login-body">
                <form onSubmit={handleSubmit}>
                  <div className="floating-label mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder=" "
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">
                      <i className="fas fa-envelope me-2" />
                      Adresse email
                    </label>
                  </div>
                  <div className="floating-label mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder=" "
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">
                      <i className="fas fa-lock me-2" />
                      Mot de passe
                    </label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Se souvenir de moi
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">
                      Mot de passe oublié?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-login text-white mb-4"
                  >
                    <i className="fas fa-sign-in-alt me-2" /> Se connecter
                  </button>
                  <div className="text-center">
                    <span className="text-muted">
                      Si Vous n'avez pas de compte? Veuillez contacter
                      l'administrateur
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
