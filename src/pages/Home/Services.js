// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import db_url from '../../redux/db_url'

//Import Components
import CourseBox from "./course-box";
import SectionTitle from "../../components/Shared/section-title";

class Services extends Component {

    constructor(props) {
        super(props)
        this.state = {
            conferences: []
        }
    }

    componentDidMount(){
        var teambox = document.getElementsByName("teambox");
        for(var i=0; i<teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }        
    }

    render() {
        const { conferences, category } = this.props;
        console.log('conferences', conferences)
        return (
            <React.Fragment>
                <section className="section" id="courses">
                    <Container>
                        {/* section title */}
                        <SectionTitle title={category} desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* coursebox */}
                            <CourseBox conferences={conferences} />

                            <Col className="mt-4 pt-2 text-center">
                                <Link to="#" className="btn btn-primary">See More {category} <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60" id="instructors">
                        {/* section title */}
                        {/* <SectionTitle title="Faculty" desc=" that can provide everything you need to generate awareness, drive traffic, connect." /> */}

                        <Row>
                            {/* teambox */}
                            {/* <TeamBox candidates={this.state.candidates} /> */}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

// const mapStateToProps = ({ conferencesReducer }) => {
//     const { conferences } = conferencesReducer;
//     return { conferences };
//   };
  const mapActionsToProps = {

  };
  
  export default connect(
    null,
    mapActionsToProps
  )(Services);