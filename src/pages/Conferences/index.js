// React Basic and Bootstrap
import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import Generic components
import Banner from "./Banner";
import About from './About';
import Speakers from './Speakers';
import Schedule from './Schedule';
import Cta from './Cta';
import Price from './Price';
import News from './News';

class Index extends Component {

    state = {
        event: null
    }

    componentDidMount() {

        const { conferences } = this.props;
        window.scrollTo(0, 0)

        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        window.addEventListener("scroll", this.scrollNavigation, true);

        const { id } = this.props.match.params;
        this.setState({ event: conferences.find(s => s.id == id) })


    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {
        const { event } = this.state;
        console.log('this. props==>>>', this.state)


        return (
            <React.Fragment>

                {/* Hero Start */}
                <Banner
                    event={event}
                />

                {/* About */}
                <About
                    event={event}
                />

                {/* Speakers */}
                <Speakers
                    event={event}
                />

                {/* Schedule */}
                <Schedule
                    event={event}
                />

                {/* Cta */}
                <Cta
                    event={event}
                />

                {/* Price */}
                <Price
                    event={event}
                />

                {/* News */}
                <News
                    event={event}
                />

            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ main }) => {
    const { conferences } = main;
    return { conferences };
};
const mapActionsToProps = {

};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Index);
