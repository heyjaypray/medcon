import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Banner from '../../../../Conferences/Banner';
import ReactJWPlayer from 'react-jw-player';


// import BlogBox from "../../../../components/Shared/blog-box";

class LiveEvent extends Component {
    state = {
      course: null
    }

    componentDidMount() {
      const { courses} = this.props;

      document.body.classList = '';
      document.getElementById('topnav').classList.add('bg-white');
      window.addEventListener('scroll', this.scrollNavigation, true);

      const { id } = this.props.match.params;
      this.setState({ course: courses.find(s => s.id === id) });
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

            <Row className='align-items-center'>
              <Col lg="12" md="9">
                <ReactJWPlayer
                  playerId='vWNdCs80'
                  playerScript='https://cdn.jwplayer.com/libraries/vWNdCs80.js'
                  file='https://cdn.jwplayer.com/videos/eLvtfp5m-rw5vNhWd.mp4'
                />
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

};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LiveEvent);
