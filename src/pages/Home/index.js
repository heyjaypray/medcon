// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

// Import Generic components
import Feature from './Feature';
import About from './About';
import Cta from './Cta';
import Cta1 from './Cta1';
import Services from './Services';
import Testi from './Testi';
import Partners from '../../components/Shared/Partners';
import Section from './Banner';
import Cookies from 'js-cookie'

import Carousel from './Components/Carousel'

import { getConferences } from '../../redux/main/actions'

const cookie = Cookies.get("jwt");

class Index extends Component {
  componentDidMount() {
    document.body.classList = '';
    document.getElementById('topnav').classList.add('bg-white');
    window.addEventListener('scroll', this.scrollNavigation, true);
    
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  render() {
    const { conferences, courses } = this.props;

    const items = [conferences, courses]
    const categories = ['Conferences', 'Courses']

    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* Feature */}
        <Feature />

        {/* About */}
        <About />

        {/* Cta */}
        <Cta />

        {/* Services */}

        <Carousel items={items} categories={categories} />
        {/* <Services  /> */}

        {/* Cta1 */}
        <Cta1 />

        {/* Testi */}
        <Testi />

        {/* Partner */}
        <section className='bg-light section-two'>
          <Container>
            <Partners />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ main }) => {
  const { conferences, courses } = main;
  return { conferences, courses };
};
const mapActionsToProps = {
    getConferences
};

export default connect(mapStateToProps, mapActionsToProps)(Index);
