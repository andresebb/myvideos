import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions";
import googleLogo from "../assets/static/google-icon.png";
import twitterLogo from "../assets/static/twitter-icon.png";

import "../assets/styles/Login.scss";

const Login = ({ loginRequest, history }) => {
  const [form, setForm] = useState({});

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(form);
    history.push("/");
  };

  return (
    <>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Correo"
              name="email"
              onChange={handleInput}
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleInput}
            />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleLogo} /> Inicia sesión con Google
            </div>
            <div>
              <img src={twitterLogo} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
