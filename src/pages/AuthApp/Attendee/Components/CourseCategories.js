import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

class Categories extends Component {

    state = {
      eventIsLive: true
    }

    render() {
      const { item, category, link, user } = this.props;
      const { eventIsLive } = this.state;

      console.log( { user });

      const itemIds = item.map(i => {
        return i.id;
      });

      const subscribedId = user && user.Subscribed_Courses && user.Subscribed_Courses.map(i=> {
        return i.course.id;
      });

      return (
        <div className="mr-5 ml-5 netflix">
          <h5 className="mt-4 mb-0">{category} :</h5>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
          >
            {
              item.map((event, key) =>
                <SwiperSlide key={key}>
                  {console.log(subscribedId.find(id => id === event.id))}
                  <Col lg="12"  className="mt-4 pt-2">
                    <div className="blog position-relative overflow-hidden shadow rounded">
                      <div className="position-relative">
                        <img src={event.Photos[0].url} className="img-fluid rounded-top" alt="" />
                        <div className="overlay rounded-top bg-dark"></div>
                      </div>
                      <div className="content p-4">
                        <h4><Link to="#" className="title text-dark">{event.Title}</Link></h4>
                        <div className="post-meta mt-3">
                          <Link to={subscribedId.find(id => id === event.id) ? `/account/${link}/${event.id}` : `/${link}/${event.id}` } className="text-muted float-right readmore">View Event <i className="mdi mdi-chevron-right"></i></Link>
                          <ul className="list-unstyled mb-0">
                            <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{event.likes}</Link></li>
                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{event.blogComments}</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="author">
                        <small className="text-light user d-block">{event.Description}</small>
                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {event.date}</small>
                      </div>
                    </div>
                  </Col>
                </SwiperSlide>
              )
            }     
          </Swiper>
        </div>
      );
    }
}

export default Categories;