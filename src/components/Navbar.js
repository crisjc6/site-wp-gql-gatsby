import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
const Navbar = class extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        active: false,
                        navBarActiveClass: '',
                }
        }

        toggleHamburger = () => {
                // toggle the active boolean in the state
                this.setState(
                    {
                            active: !this.state.active,
                    },
                    // after state has been updated,
                    () => {
                            // set the class in state for the navbar accordingly
                            this.state.active
                                ? this.setState({
                                        navBarActiveClass: 'is-active',
                                })
                                : this.setState({
                                        navBarActiveClass: '',
                                })
                    }
                )
        }
        render() {
                return (
    <StaticQuery
        query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
                        render={data => {
                                return (
                                    <nav
                                        className="navbar is-fixed-top is-transparent has-shadow"
                                        role="navigation"
                                        aria-label="main-navigation"
                                    >
                                        <div className="container flex-around">
                                            <div className="navbar-brand logo">
                                                <Link to="/" className="navbar-item">
                                                    <figure className="image">
                                                        <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                                                    </figure>
                                                </Link>
                                                {/* Hamburger menu */}
                                                <div
                                                    className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                                                    data-target="navMenu"
                                                    onClick={() => this.toggleHamburger()}
                                                    onKeyDown={() => this.toggleHamburger()}
                                                    role="button" tabIndex="0"
                                                >
                                                    <span />
                                                    <span />
                                                    <span />
                                                </div>
                                            </div>
                                            <div
                                                id="navMenu"
                                                className={`navbar-menu ${this.state.navBarActiveClass}`}
                                            >
                                                <div className="navbar-start has-text-centered">
                                                    <Link className="navbar-item" to="/blog">
                                                        Home
                                                    </Link>
                                                    <Link className="navbar-item" to="/blog">
                                                        Features
                                                    </Link>
                                                    <Link className="navbar-item" to="/about">
                                                        Team
                                                    </Link>
                                                    <div className="navbar-item has-dropdown is-hoverable">
                                                        <Link className="navbar-item" to="/about">
                                                            Blog
                                                        </Link>
                                                        <div className="navbar-dropdown">
                                                            <Link className="navbar-item" to="/about">
                                                                Blog Detail
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="navbar-end">
                                                    <div className="navbar-item">
                                                        <div className="buttons">
                                                            <a className="button is-primary">
                                                                <strong>
                                                                    Sign up
                                                                </strong>
                                                            </a>
                                                            <a className="button is-light">
                                                                Log in
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                    // <nav className="navbar is-transparent">
                                    //         <div className="container">
                                    //                 <div className="navbar-brand">
                                    //                         <Link to="/" className="navbar-item">
                                    //                                 <figure className="image">
                                    //                                         <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                                    //                                 </figure>
                                    //                         </Link>
                                    //                 </div>
                                    //                 <div
                                    //                     className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                                    //                     data-target="navMenu"
                                    //                     onClick={() => this.toggleHamburger()}
                                    //                     onKeyDown={() => this.toggleHamburger()}
                                    //                     role="button" tabIndex="0"
                                    //                 >
                                    //                         <span />
                                    //                         <span />
                                    //                         <span />
                                    //                 </div>
                                    //                 <div className="navbar-start">
                                    //                         {data.allWordpressPage.edges.map(edge => (
                                    //                             <Link
                                    //                                 className="navbar-item"
                                    //                                 to={edge.node.slug}
                                    //                                 key={edge.node.slug}
                                    //                             >
                                    //                                     {edge.node.title}
                                    //                             </Link>
                                    //                         ))}
                                    //                 </div>
                                    //                 <div className="navbar-end">
                                    //                         <div className="navbar-item">
                                    //                                 <div className="buttons">
                                    //                                         <a className="button is-primary">
                                    //                                                 <strong>
                                    //                                                         Sign up
                                    //                                                 </strong>
                                    //                                         </a>
                                    //                                         <a className="button is-light">
                                    //                                                 Log in
                                    //                                         </a>
                                    //                                 </div>
                                    //                         </div>
                                    //                 </div>
                                    //         </div>
                                    // </nav>
                                )
                        }}
                    />
                );
        }
}

export default Navbar



// const Navbar = () => (
//     <StaticQuery
//         query={graphql`
//       query {
//         allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
//           edges {
//             node {
//               title
//               slug
//             }
//           }
//         }
//       }
//     `}
//
//         render={data => (
//             <nav className="navbar is-transparent" id="my-nav">
//                     <div className="container">
//                             <div className="navbar-brand">
//                                     <Link to="/" className="navbar-item">
//                                             <figure className="image">
//                                                     <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
//                                             </figure>
//                                     </Link>
//                             </div>
//                             <div className="navbar-start">
//                                     {data.allWordpressPage.edges.map(edge => (
//                                         <Link
//                                             className="navbar-item"
//                                             to={edge.node.slug}
//                                             key={edge.node.slug}
//                                         >
//                                                 {edge.node.title}
//                                         </Link>
//                                     ))}
//                             </div>
//                             <div className="navbar-end">
//                                     <div className="navbar-item">
//                                             <div className="buttons">
//                                                     <a className="button is-primary">
//                                                             <strong>
//                                                                     Sign up
//                                                             </strong>
//                                                     </a>
//                                                     <a className="button is-light">
//                                                             Log in
//                                                     </a>
//                                             </div>
//                                     </div>
//                             </div>
//                     </div>
//             </nav>
//         )}
//     />
// )
// export default Navbar
