import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AccountPage = React.lazy(() =>
    import(/* webpackChunkName: "viwes-second-menu" */ './Profile')
);

const AboutPage = React.lazy(() =>
    import(/* webpackChunkName: "viwes-second-menu" */ '../Pages/PageAboutUs')
);

const Login = React.lazy(() =>
    import(/* webpackChunkName: "viwes-second-menu" */ './Login')
);

const AuthRoute = ({ component: Component, authUser, ...rest }) => {
    return (
        <Route
            exact
            {...rest}
            render={props =>
                authUser ? (
                    <Component {...props} authUser={authUser} />
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

class Index extends Component {
    render() {
        const { loggedIn, match } = this.props;
        return (

            <div className="dashboard-wrapper">
                <Suspense fallback={<div className="loading" />}>
                    <Switch>
                        <AuthRoute
                            path="/account"
                            authUser={loggedIn}
                            component={AccountPage}
                        />
                        <Route
                            path="/login"
                            render={props => <Login {...props} />}
                        />
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}
const mapStateToProps = ({ user }) => {
    const { loggedIn } = user;
    return { loggedIn };
};

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(Index)
);
