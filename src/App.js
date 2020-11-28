import React, { Component, Suspense, Fragment } from 'react';
import Layout from './components/Layout/';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getConferences } from './redux/conferences/actions'
import { getUser } from './redux/user/actions'
import Cookies from 'js-cookie'

// Import Css
import './Apps.scss';
import './css/materialdesignicons.min.css';
import './css/colors/default.css';

// Include Routes 
import routes from './routes';


const Sidebar = React.lazy(() => import('./components/Layout/Sidebar'));

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      console.log(this.props)
      const { sidebar } = this.props
      return (
        <Fragment>
          <Layout sidebar={sidebar}>
            <WrappedComponent {...this.props} />
          </Layout>
        </Fragment>
      )
    }
  };
}

const AuthRoute = ({ component: Component, authUser, sidebar, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} authUser={authUser} sidebar={sidebar} />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

class App extends Component {


  cookies = () => {
    const cookie = Cookies.get("jwt");
    const id = Cookies.get("id");
    if (cookie) {
      this.props.getUser(id, cookie)
    }
  }

  componentDidMount() {
    this.props.getConferences()
    this.cookies()
  }

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
    const { loggedIn } = this.props;
    return (
      <React.Fragment>
        <Router>
          <Suspense fallback={this.Loader()} >
            <Switch>
              {routes.map((route, idx) =>
                route.isWithoutLayout ?
                  route.auth ?
                    <AuthRoute
                      path={route.path}
                      authUser={loggedIn}
                      component={route.component}
                      exact
                    /> :
                    <Route exact path={route.path} component={route.component} key={idx} />
                  :
                  route.auth ?
                    <AuthRoute
                      key={idx}
                      exact
                      path={route.path}
                      authUser={loggedIn}
                      sidebar={route.sidebar}
                      component={withLayout(route.component)}
                    /> :
                    <Route exact path={route.path} sidebar={route.sidebar} component={withLayout(route.component)} key={idx} />
              )}
            </Switch>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ conferencesReducer, users }) => {
  const { conferences } = conferencesReducer
  const { loggedIn } = users
  return { conferences, loggedIn };
};
const mapActionsToProps = {
  getConferences,
  getUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);