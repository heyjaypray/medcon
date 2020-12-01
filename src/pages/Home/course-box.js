import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

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
                <div className="job-box rounded shadow position-relative overflow-hidden">
                  <div className="border-bottom">
                    <div className="position-relative">
                      <img src={item.Photos ? item.Photos[0].url : ''} className="img-fluid" alt=""/>
                      {/* <div className="job-overlay bg-white"></div> */}
                    </div>
                    {/* <h5 className="mb-0 position"><Link to="/page-job-detail" className="text-dark">UI Designer</Link>
                      <ul className="list-unstyled h6 mb-0 text-warning">
                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                        <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                      </ul>
                    </h5> */}
                    <ul className="list-unstyled head mb-0">
                      <li className="badge badge-success badge-pill">CME Accedited</li>
                    </ul>
                  </div>
                                    
                  <div className="content position-relative p-4">
                    <h5><Link to="#" className="title text-dark">{item.Title}</Link></h5>
                    <p>{item.Description}</p>
                    <ReactMarkdown source={item.Features} />
                    <Link to={`/${_.lowerCase(category)}/${item.id}`} className="btn btn-outline-primary btn-block">Apply Now</Link>
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