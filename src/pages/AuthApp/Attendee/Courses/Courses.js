import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, UncontrolledTooltip, Progress, PaginationItem, PaginationLink, Pagination } from 'reactstrap';
import { connect } from 'react-redux';

import Categories from '../Components/Categories';

//Import Images
import imgbg from '../../../../images/account/bg.jpg';


class AttendeeEvents extends Component {
  state = {

  }

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
    }
    else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  }

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <section className="bg-profile d-table w-100" style={{ background: `url(${imgbg}) center center` }}>
          <Container>
            <Row>
              <Col lg="12">
                <div className="public-profile position-relative p-4 bg-white overflow-hidden rounded shadow" style={{ zIndex: '1' }}>
                  <Row className="align-items-center">
                    <Col lg="6" md="9">
                      <Row className="align-items-center">
                        <Col md="7" className="text-md-left text-center mt-4 mt-sm-0">
                          <h3 className="title mb-0">Courses</h3>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>


        <section className="section mt-60">
 
          <Row>
            <Col lg="12" md="12" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="ml-lg-3">
                <Categories item={user.courses} category="Subscribed" link="courses" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12" md="12" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="ml-lg-3">
                <Categories item={user.courses} category="Featured" link="courses" />
              </div>
            </Col>
          </Row>
     
        </section>
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

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AttendeeEvents);
