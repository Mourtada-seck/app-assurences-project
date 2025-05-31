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
      `);
  };

  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage: 'url("../../../public/images/image-login.webp")',
        }}
      />
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3 className="text-center mb-4 text-dark">
                Bienvenue chez <strong>DB Africa</strong>
              </h3>
              <small
                className="pb-2 text-dark mobile-text-white"
                style={{
                  fontWeight: 700,
                }}
              >
                Entrez vos informations d'identification:
              </small>

              <form
                onSubmit={handleSubmit}
                className="formul p-4 p-md-5 rounded"
              >
                <div className="form-group first">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email@gmail.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-0">
                    <span className="caption">Se souvenir de moi</span>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <div className="control__indicator" />
                  </label>
                </div>
                <input
                  type="submit"
                  value="Se connecter"
                  className="btn btn-block btn-primary"
                />
                <div className="pt-4 ">
                  <p className="text-white">
                    🔑 Mot de passe oublié ? 📞 Veuillez contacter
                    l'administrateur
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


