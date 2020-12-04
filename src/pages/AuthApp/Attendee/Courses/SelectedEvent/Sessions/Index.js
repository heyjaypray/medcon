import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { Parallax } from 'react-parallax';
import moment from 'moment';

import Sidebar from '../../../../../../components/Layout/Sidebar'


class Section extends Component {

  componentDidMount() {
    document.body.classList = "";
    document.getElementById('topnav').classList.add('bg-white');
    window.addEventListener("scroll", this.scrollNavigation, true);
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
    const { event } = this.props;

    return (
      <React.Fragment>

        <section className="bg-home d-flex align-items-center" >
          <Sidebar />
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" className="text-center">
                <div className="title-heading">
                  <p>SESSIONS</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default Section;