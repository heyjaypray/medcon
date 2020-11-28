import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { compose } from 'redux'
// Scroll up button
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

//Import Switcher
// import ThemeSwitcher from "./theme-switcher";

// Layout Components
const Topbar = React.lazy(() => import('./Topbar'));
const Sidebar = React.lazy(() => import('./Sidebar'));
const NavbarPage = React.lazy(() => import('../../pages/Saas Onepage/NavbarPage'));
const Footer = React.lazy(() => import('./Footer'));
const FooterWithoutMenuLightSocialOnly = React.lazy(() => import('./FooterWithoutMenuLightSocialOnly'));

class Layout extends Component {

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { user, location, match, sidebar } = this.props;
    console.log('proppssssss', this.props)
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()} >


          <Topbar />

          {sidebar ?
            <Sidebar /> : null
          }



          {this.props.children}
          {(() => {
            if (this.props.location.pathname === "/index-marketing" || this.props.location.pathname === "/index-modern-business" || this.props.location.pathname === "/index-services" || this.props.location.pathname === "/index-job") {
              return (
                <Footer isLight={true} />
              )
            }
            else if (this.props.location.pathname === "/index-portfolio" || this.props.location.pathname === "/page-contact-two") {
              return (
                <FooterWithoutMenuLightSocialOnly class="border-0 bg-light" />
              )
            }
            else if (this.props.location.pathname === "/index-personal" || this.props.location.pathname === "/page-invoice") {
              return (
                <FooterWithoutMenuLightSocialOnly class="" />
              )
            } else {
              return (
                <Footer />
              )
            }
          })()}
          {/* <ThemeSwitcher/> */}
          <div id="bottomIcon">
            {/* scrollup button */}
            <ScrollUpButton className="bottomIcon" />
          </div>
        </Suspense>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const { user } = users;
  return { user };
};
const mapActionsToProps = {
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionsToProps)
)(Layout);
