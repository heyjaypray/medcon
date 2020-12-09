import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Banner from '../../../../Conferences/Banner';
import ReactJWPlayer from 'react-jw-player';
import Playlist from './Components/Playlist';
import VideoPlayer from './Components/Video';
import AboutPage from './Components/About';
import axios from 'axios';
import db_url from '../../../../../redux/db_url';
import { selectVideo, selectCourse } from '../../../../../redux/main/actions';

// import BlogBox from "../../../../components/Shared/blog-box";

class LiveEvent extends Component {
    state = {
      course: null
    }

    componentDidMount = async () => {
      const { course, selectVideo, selectCourse, user, addCourseToUser } = this.props;

      document.body.classList = '';
      document.getElementById('topnav').classList.add('bg-white');
      window.addEventListener('scroll', this.scrollNavigation, true);

      const { id } = this.props.match.params;
      selectCourse(id);

      if(!user.Subscribed_Courses || user.Subscribed_Courses.length < 1){
        const obj = {
          Subscribed_Courses : [{
            course: id,
            Modules_Viewed: [],
            PercentageComplete: 0,
            CME_CREDITS: 0
          }]
        };
        // addCourseToUser(user.id ,obj);
      }
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollNavigation, true);
      selectCourse(null);
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
      const { user, course } = this.props;

      return (
        <React.Fragment>
          {/* <section className="bg-profile d-table w-100" style={{ background: `url(${imgbg}) center center` }}>
                    <Container>
                        
                    </Container>
                </section> */}
          {/* <Sidebar /> */}
          <section>

            <Row className="mt-5" >
              <Col lg="9" md="12" sm="12" className="mt-5 ml-2">
                <VideoPlayer course={course} />
              </Col>
              <Col className="mr-5 mt-5">
                <Playlist course={course} />
              </Col>
            </Row>
            <Row>
              <Col>
                <AboutPage course={course} />
              </Col>
            </Row>

          </section>
        </React.Fragment>
      );
    }
}

const mapStateToProps = ({ users, main }) => {
  const { user } = users;
  const { courses, course } = main;
  return { user, courses, course };
};
const mapActionsToProps = {
  selectVideo,
  selectCourse
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LiveEvent);
