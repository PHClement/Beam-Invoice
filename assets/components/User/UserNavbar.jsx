import React, {Component} from 'react';

import "../../styles/sidebar.scss";

import {withTranslation} from "react-i18next";
import FormSelectLanguageInputComponent from "../Forms/Inputs/FormSelectLanguageInputComponent";
import {Link} from "react-router-dom";
import FormSelectLanguageSmallInputComponent from "../Forms/Inputs/FormSelectLanguageSmallInputComponent";

class UserNavbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t, i18n} = this.props;

    return (
      <React.Fragment>
        <nav className="navbar m-b-30 is-hidden-desktop" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={require('../../images/logo.png')} height="28"/>
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to={"/"} className="navbar-item">
                {t('navbar.dashboard')}
              </Link>

              <Link to={"/clients"} className="navbar-item">
                {t('navbar.clients')}
              </Link>

              <a className="navbar-item">
                {t('navbar.devis')}
              </a>

              <a className="navbar-item">
                {t('navbar.factures')}
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <FormSelectLanguageInputComponent/>
              </div>
              <div className="navbar-item row-content start">
                <figure className="image is-32x32" style={{height: 28, width: 28}}>
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                </figure>
                <div className="m-l-5">
                  <h5 className="title is-5" style={{fontSize: 12}}>Clément de Louvencourt</h5>
                  <h6 className="subtitle is-6" style={{fontSize: 10, marginTop: -24}}>Comptable</h6>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside className="column is-1 is-fullheight sidebar is-hidden-mobile">
          <Link to={"/"}>
            <img className="logo" src={require('../../images/logo_small.png')}/>
          </Link>
          <div className="center-sidebar">
            <Link to={"/"}>
              <i className="fas fa-tachometer-alt"></i>
            </Link>
            <Link to={"/clients"} className="is-active">
              <i className="fas fa-users"></i>
            </Link>
            <Link to={"/clients"}>
              <i className="fas fa-receipt"></i>
            </Link>
            <Link to={"/clients"}>
              <i className="fas fa-file-invoice"></i>
            </Link>
            <hr className="separator"/>
            <Link to={"/clients"}>
              <i className="fas fa-cogs"></i>
            </Link>
          </div>
          <div className="end-sidebar">
            <FormSelectLanguageSmallInputComponent/>
            <Link to={"/clients"}>
              <figure className="image is-32x32">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
              </figure>
            </Link>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default withTranslation()(UserNavbar);
