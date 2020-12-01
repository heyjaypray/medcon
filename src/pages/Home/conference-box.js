import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import _ from 'lodash';

//Star Rating
// import StarRatings from 'react-star-ratings';

class CourseBox extends Component {

  render() {
    const { items, category } = this.props;
    if(items){
      return (
        <React.Fragment>
          {
            items.map((item, key) =>
              <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
                <div className="courses-desc position-relative overflow-hidden rounded border">
                  <div className="position-relative d-block overflow-hidden">
                    <img src={item.Photos[0] ? item.Photos[0].url : ''} className="img-fluid rounded-top mx-auto" alt="" />
                    <div className="overlay-work"></div>
                    <Link to={`/${_.lowerCase(category)}/${item.id}`} className="text-white h6 preview">View Event <i className="mdi mdi-chevron-right"></i></Link>
                  </div>
                  <div className="content p-3">
                    <h5><Link to="#" className="title text-dark">{item.Title}</Link></h5>
                    <p>Hosted by {item.organizer ? item.organizer.Name : 'a'}</p>
                    <p>{item.Description}</p>
                    <Link to={`/${_.lowerCase(category)}/${item.id}`} className="btn btn-outline-primary btn-block">View Event</Link>
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
                    <Link ><i className="mdi mdi-heart h5"></i></Link>
                  </div>
                  
                </div>
              </Col>
            )
          }
        </React.Fragment>
      );
    } else {
      return null;
    }

  }
}

export default CourseBox;