import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { connect } from "react-redux";
import { logoutRequest } from "../actions/index";

const Header = ({ user, logoutRequest }) => {
  const hasUser = Object.keys(user).length;

  const handleLogut = () => {
    logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          {hasUser > 0 ? <p>{user.email}</p> : <p>Perfil</p>}
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="/" onClick={handleLogut}>
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToprops = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToprops)(Header);
