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
import { selectVideo } from '../../../../../redux/main/actions';

// import BlogBox from "../../../../components/Shared/blog-box";

class LiveEvent extends Component {
    state = {
      course: null
    }

    componentDidMount = async () => {
      const { courses, selectVideo } = this.props;

      document.body.classList = '';
      document.getElementById('topnav').classList.add('bg-white');
      window.addEventListener('scroll', this.scrollNavigation, true);

      const { id } = this.props.match.params;
      axios.get(`${db_url}/courses/${id}`)
        .then(res => {
          const course = res.data;
          this.setState({ course });
        }).then(() => {
          const a = this.state.course.Modules[0].playlist.playlist[0];
          //   const d = this.state.course && this.state.course.Modules && this.state.course.Modules[0] && this.state.course.Modules[0].playlist && this.state.course.Modules[0].playlist.playlist.sources[0].file;
          selectVideo(a);
        });
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
      const { course } = this.state;
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
  const { courses } = main;
  return { user, courses };
};
const mapActionsToProps = {
  selectVideo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LiveEvent);
