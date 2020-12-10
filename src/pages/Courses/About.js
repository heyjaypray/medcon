// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { addCourseToUser } from '../../redux/user/actions';

//import images
import about from '../../images/event/about.jpg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  addCourse = (id) => {

    const { user, addCourseToUser } = this.props;

    if(user){
      const obj = {
        Subscribed_Courses: [...user.Subscribed_Courses, {course: id}]
      };
      const subscribedId = user && user.Subscribed_Courses && user.Subscribed_Courses.map(i=> {
        return i.course.id;
      });

      const checkSubscribe = subscribedId.find(i => i === id);

      if(checkSubscribe){
        alert('youre already subscribed');
        return;
      } else{
        addCourseToUser(user.id, obj);
      }
    } else {
      alert('please sign up or login');
    }



    

  }

  render() {
    const { event } = this.props;
    if(event){
      return (
        <React.Fragment>
          <section className="section border-top">
            <Container>
              <Row>
                <Col lg='8'>
                  <div className="bg-light rounded">
                    <Row className="align-items-center">
                      <Col lg="12">
                        <div className="section-title p-5">
                          <ReactMarkdown source={event.About} />
                          <div className="mt-4 pt-2">
                            {/* <Link to="#" className="btn btn-outline-primary">Read More <i className="mdi mdi-chevron-right"></i></Link> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="job-box rounded shadow position-relative overflow-hidden">
                    <div className="border-bottom">
                      <div className="position-relative">
                        <img src={event.Photos ? event.Photos[0].url : ''} className="img-fluid" alt=""/>
                        {/* <div className="job-overlay bg-white"></div> */}
                      </div>
                      <ul className="list-unstyled head mb-0">
                        <li className="badge badge-success badge-pill">CME Accedited</li>
                      </ul>
                    </div>
                                    
                    <div className="content position-relative p-4">
                      <p>{event.Description}</p>
                      <ReactMarkdown source={event.Features} />
                      <div className="btn btn-danger btn-block" onClick={() => this.addCourse(event.id)}>Add To Cart</div>
                      <div className="btn btn-outline-primary btn-block">Wishlist</div>
                      {/* <Link to={`/${_.lowerCase(category)}/${item.id}`} className="btn btn-outline-primary btn-block">Apply Now</Link> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>


          </section>
          <div className="position-relative">
            <div className="shape overflow-hidden text-light">
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div />
      );
    }
       
  }
}

const mapStateToProps = ({ users, main }) => {
  const { user } = users;
  const { courses, course } = main;
  return { user, courses, course };
};
const mapActionsToProps = {
  addCourseToUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(About);