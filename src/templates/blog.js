import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import home from '../img/home.jpg'
import shape from '../img/shape.svg'
import client from '../img/client.svg'
import feature1 from '../img/feauture1.svg'
import feature2 from '../img/feature2.svg'
import feature3 from '../img/feature2.svg'
import descri01 from '../img/descri01.jpg'
import descri02 from '../img/descri02.jpg'
import descri03 from '../img/descri03.jpg'
import footer from '../img/footer.svg'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
        <Layout>
          <section className="hero ">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column  is-4">
                    <p className="title is-2">
                      Get your IP done right with Patent P.C.
                    </p>
                    <p className="subtitle">
                      Patent Professional Corporation offers the most comprehensive fixed-fee intellectual property protection for growing businesses.
                    </p>
                    <div className="field">
                      <input className="input is-medium" type="text" placeholder="Work Email" />
                    </div>
                    <button className="button"  style={{
                      backgroundColor: "#47BFA4",
                      color: "white"
                    }}>
                      Get started
                    </button>
                  </div>
                  <div className="column  is-8">
                    <figure className="image">
                      <img src={home} alt="Kaldi"/>
                    </figure>
                  </div>
                </div>
                <div className="columns">
                  <div className="column has-text-centered is-12">
                    <p className="subtitle">
                      Our lawyers have worked on IP protection for
                      (logos for Intel, Applied Materials, Adobe, Shutterfly, Align Tech, Compaq, Univ Calif Berkeley, Stanford in addition to the list in the current page that hidden
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hero"  style={{
            backgroundColor: "#F9FAFC",
          }}>
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-12">
                    <p className="title">
                      Get your IP done right with Patent P.C.
                    </p>
                    <p className="subtitle">
                      Patent Professional Corporation offers the most comprehensive fixed-fee intellectual property protection for growing businesses.
                    </p>
                  </div>
                </div>
                <div className="columns is-vcentered" >
                  <div className="column" >
                    <figure className="image">
                      <img src={client} alt="Kaldi" style={{ width: '200px' }}/>
                    </figure>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <p className="title">
                      Why choose us?
                    </p>
                  </div>
                </div>
                <nav className="columns box">
                  <a className="bd-focus-item column has-text-centered">
                    <figure className="bd-focus-icon">
                      <img src={feature1} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                    <p className="">
                      <strong>
                        TRUSTED PROFESSIONALS
                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      Our patent lawyers and agents came from large law firms and have worked with many Fortune 500 companies.
                    </p>
                  </a>
                  <a className="bd-focus-item column has-text-centered">
                    <figure className="bd-focus-icon">
                      <img src={feature2} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                    <p className="">
                      <strong>
                        ADVANCED TECHNOLOGY
                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      We not only understand technology, but we also developed AI software to improve our IP workflow and pass the savings to you.
                    </p>
                  </a>
                  <a className="bd-focus-item column has-text-centered">
                    <figure className="bd-focus-icon">
                      <img src={feature3} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                    <p className="">
                      <strong>
                        FIXED-FEE PRICING
                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      Our tech enables your disclosure to be efficiently converted to patents. Our cost-effective flat-rate pricing ensures that legal bill surprises are not in your future.
                    </p>
                  </a>
                  <a className="bd-focus-item column has-text-centered">
                    <figure className="bd-focus-icon">
                      <img src={feature1} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                    <p className="">
                      <strong>
                        PERSONALIZED SERVICE

                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      Get fast, responsive service. Your dedicated lawyer knows your business from the ground up.
                    </p>
                  </a>

                </nav>
              </div>
            </div>
          </section>
          <section className="hero is-default is-bold">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img src={descri01} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column is-6 is-offset-1 is-vcentered">
                    <h2 className="subtitle is-4 has-text-centered">
                      Our results are almost 2x better than those of other law firms
                      For clients who wants to go all-the-way, our historical allowance rate has been 95%. This compares to the 55% success rate for the average US law firm. Our work is meticulously done and our diagnostics and analytics produces better results, and this shows in our past successes.
                    </h2>
                    <br />
                  </div>
                </div>
              </div>
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-6 is-offset-1 is-vcentered">
                    <h2 className="subtitle is-4 has-text-centered">
                      You won’t be surprised by our fixed-fees
                      Our services are priced on a flat-fee basis, so you can budget for all your IP requirements. Others charge by the hour, and you won’t find out until they send you an invoice.  You now have control over your IP spending.
                    </h2>
                    <br />
                  </div>
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img src={descri02} alt="Kaldi"/>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img src={descri03} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column is-6 is-offset-1 is-vcentered">
                    <h2 className="subtitle is-4 has-text-centered">
                      Your IP first draft done in days. Not in months.
                      With first-to-file rules, time is of the essence.  From your disclosure, we can prepare first drafts in a few days with our tech-savvy professionals and our patented system.  You’ll be amazed with our responsiveness.
                    </h2>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column  is-6">
                    <p className="title is-size-5">
                      Start PatentPC today
                      Signing up for PatentPC is easy. We think once you experience truly stress-free IP processes, you won’t want to go back.
                    </p>
                  </div>
                  <div className="column is-6">
                    <div className="field">
                      <input className="input is-rounded is-medium" type="text" placeholder="Email" />
                    </div>
                    <button className="button  is-rounded is-info is-inverted">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<PostList posts={posts} title="Latest posts" />*/}
          {/*<Pagination pageContext={pageContext} pathPrefix="/" />*/}
        </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
