import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

//Star Rating
// import StarRatings from 'react-star-ratings';

class CourseBox extends Component {

    render() {
        if(this.props.conferences){
            return (
                <React.Fragment>
                    {
                        this.props.conferences.map((course, key) =>
                            <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
                                <div className="courses-desc position-relative overflow-hidden rounded border">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course.Photos[0] ? course.Photos[0].url : ''} className="img-fluid rounded-top mx-auto" alt="" />
                                        <div className="overlay-work"></div>
                                        <Link to={'/event/' + course.id} className="text-white h6 preview">View Event <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">{course.Title}</Link></h5>
                                        <p>Hosted by {course.organizer.Name}</p>
                                        <p>{course.Description}</p>
                                        
                                        <div className="fees">
                                            <ul className="list-unstyled float-left mb-0">
                                                <li className="h3"><span className="h6">July 31st - August 1st</span></li>
                                            </ul>
                                            {/* <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> {course.students} Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> {course.lesson} Lession</li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </React.Fragment>
            );
        } else {
            return null
        }

    }
}

export default CourseBox;