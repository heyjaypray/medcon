import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { Container } from "reactstrap";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { logout } from '../../redux/user/actions'

class Topbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navLinks: [
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "Conferences", link: "/" },
        { id: 3, title: "Courses", link: "/" },
        { id: 4, title: "Webinars", link: "/" },
        { id: 5, title: "Account", link: "/account" }
      ],
      authNavlinks: [
        { id: 1, title: "Account", link: "/account" },
        { id: 2, title: "Events", link: "/account/events" },
        { id: 3, title: "Courses", link: "/account" },
        { id: 4, title: "Connections", link: "/account" },
      ],
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.openBlock.bind(this);
    this.openNestedBlock.bind(this);
  }

  toggleLine() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add('active'); // li
      const parent1 = parent.parentElement;
      parent1.classList.add('active'); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add('active'); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add('active'); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add('active'); // li
          }
        }
      }
    }
  }

  openBlock = (level2_id) => {
    //match level 2 id with current clicked id and if id is correct then update status and open level 2 submenu
    this.setState({
      navLinks: this.state.navLinks.map(navLink => (navLink.id === level2_id ? { ...navLink, isOpenSubMenu: !navLink.isOpenSubMenu } : navLink))
    });
  }

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id ?
        tmpLink.child.map((tmpchild) =>
          //if level1 id is matched then match level 3 id
          tmpchild.id === level3_id ?
            //if id is matched then update status(level 3 sub menu will be open)
            tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu
            :
            tmpchild.isOpenNestedSubMenu = false
        )
        :
        false

    )
    this.setState({ navLinks: tmpLinks });
  }


  logout = () => {
    const { logout, history } = this.props;
    logout(history)
  }

  render() {
    const { user, history } = this.props;
    console.log('user', user)
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>
              <Link className="logo" to="/">MedCon<span className="text-primary">.</span></Link>
            </div>
            {user ?
              <div className="buy-button">
                <div id="buyButton" className="btn btn-danger ml-1" onClick={this.logout}>Log Out</div>
              </div>
              :
              <div>
                <div className="buy-button">
                  <Link to="/signup" id="buyButton" className="btn btn-primary ml-1">Sign Up</Link>
                </div>
                <div className="buy-button">
                  <Link to="/login" id="buyButton" className="btn btn-primary">Login</Link>
                </div>
              </div>
            }


            <div className="menu-extras">
              <div className="menu-item">
                <Link to="#" onClick={this.toggleLine} className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"} >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <div id="navigation" style={{ display: this.state.isOpen ? "block" : "none" }}>
              <ul className="navigation-menu" id="top-menu">
                { user ? 
                  this.state.authNavlinks.map((navLink, key) =>
                    navLink.child || navLink.child2 ?
                      <li className="has-submenu" key={key}>
                        {/* child item(menu Item) - Level 1 */}
                        <Link to={navLink.link} onClick={(event) => { event.preventDefault(); this.openBlock(navLink.id) }} >{navLink.title}</Link>
                        <span className="menu-arrow"></span>
                        {
                          navLink.isMegaMenu ?
                            // if menu is mega menu(2 columns grid)
                            <ul className={navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu"}  >
                              <li>
                                <ul>
                                  {
                                    navLink.child.map((item, childKey) =>
                                      <li key={childKey}>
                                        <Link to={item.link}>{item.title}{item.isNew ? <span className="badge badge-danger rounded ml-2">v2.0</span> : null}</Link>
                                      </li>
                                    )
                                  }
                                </ul>
                              </li>
                              <li>
                                <ul>
                                  {
                                    navLink.child2.map((item, childKey) =>
                                      <li key={childKey}>
                                        <Link to={item.link}>{item.title}{item.isOnePage ? <span className="badge badge-warning rounded ml-2">Onepage</span> : null}</Link>
                                      </li>
                                    )
                                  }
                                </ul>
                              </li>
                            </ul>
                            :
                            // if menu is not mega menu(1grid)
                            <ul className={navLink.isOpenSubMenu ? "submenu open" : "submenu"}  >
                              {
                                navLink.child.map((childArray, childKey) =>
                                  childArray.nestedChild ?
                                    // sub menu item - Level 2
                                    <li className="has-submenu" key={childKey}>
                                      <Link to={childArray.link} onClick={(event) => { event.preventDefault(); this.openNestedBlock(navLink.id, childArray.id) }}> {childArray.title}{" "}{childArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null}</Link>
                                      <span className="submenu-arrow"></span>
                                      <ul className={childArray.isOpenNestedSubMenu ? "submenu open" : "submenu"}>
                                        {
                                          childArray.nestedChild.map((nestedChildArray, nestedKey) =>
                                            // nested sub menu item - Level 3
                                            <li key={nestedKey}><Link to={nestedChildArray.link}>{nestedChildArray.title}{" "}{nestedChildArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null}</Link></li>
                                          )
                                        }
                                      </ul>
                                    </li>
                                    :
                                    <li key={childKey}><Link to={childArray.link}>{childArray.title}</Link></li>
                                )
                              }
                            </ul>
                        }

                      </li>
                      :
                      <li key={key}><Link to={navLink.link}>{navLink.title}</Link></li>
                  ) :
                  this.state.navLinks.map((navLink, key) =>
                    navLink.child || navLink.child2 ?
                      <li className="has-submenu" key={key}>
                        {/* child item(menu Item) - Level 1 */}
                        <Link to={navLink.link} onClick={(event) => { event.preventDefault(); this.openBlock(navLink.id) }} >{navLink.title}</Link>
                        <span className="menu-arrow"></span>
                        {
                          navLink.isMegaMenu ?
                            // if menu is mega menu(2 columns grid)
                            <ul className={navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu"}  >
                              <li>
                                <ul>
                                  {
                                    navLink.child.map((item, childKey) =>
                                      <li key={childKey}>
                                        <Link to={item.link}>{item.title}{item.isNew ? <span className="badge badge-danger rounded ml-2">v2.0</span> : null}</Link>
                                      </li>
                                    )
                                  }
                                </ul>
                              </li>
                              <li>
                                <ul>
                                  {
                                    navLink.child2.map((item, childKey) =>
                                      <li key={childKey}>
                                        <Link to={item.link}>{item.title}{item.isOnePage ? <span className="badge badge-warning rounded ml-2">Onepage</span> : null}</Link>
                                      </li>
                                    )
                                  }
                                </ul>
                              </li>
                            </ul>
                            :
                            // if menu is not mega menu(1grid)
                            <ul className={navLink.isOpenSubMenu ? "submenu open" : "submenu"}  >
                              {
                                navLink.child.map((childArray, childKey) =>
                                  childArray.nestedChild ?
                                    // sub menu item - Level 2
                                    <li className="has-submenu" key={childKey}>
                                      <Link to={childArray.link} onClick={(event) => { event.preventDefault(); this.openNestedBlock(navLink.id, childArray.id) }}> {childArray.title}{" "}{childArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null}</Link>
                                      <span className="submenu-arrow"></span>
                                      <ul className={childArray.isOpenNestedSubMenu ? "submenu open" : "submenu"}>
                                        {
                                          childArray.nestedChild.map((nestedChildArray, nestedKey) =>
                                            // nested sub menu item - Level 3
                                            <li key={nestedKey}><Link to={nestedChildArray.link}>{nestedChildArray.title}{" "}{nestedChildArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null}</Link></li>
                                          )
                                        }
                                      </ul>
                                    </li>
                                    :
                                    <li key={childKey}><Link to={childArray.link}>{childArray.title}</Link></li>
                                )
                              }
                            </ul>
                        }

                      </li>
                      :
                      <li key={key}><Link to={navLink.link}>{navLink.title}</Link></li>
                  )
                }
              </ul>
              <div className="buy-menu-btn d-none">
                <Link to="#" target="_blank" className="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const { user } = users;
  return { user };
};
const mapActionsToProps = {
  logout
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapActionsToProps)
)(Topbar);