import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import home from '../img/home.jpg'
import cover from '../img/cover.png'
import shape from '../img/shape.svg'
import client from '../img/client.svg'
import feature1 from '../img/feauture1.svg'
import feature2 from '../img/feature2.svg'
import feature3 from '../img/feature3.png'
import numed from '../img/numed.png'
import eoflow from '../img/eoflow.png'
import mono from '../img/mono.png'
import onevalley from '../img/onevalley.png'
import cisbay from '../img/cisbay.png'
import micro from '../img/micro.png'
import jengas from '../img/jengas.png'
import tartan from '../img/tartan.png'
import boom from '../img/boom.png'
import scale from '../img/scale.png'
import reflect from '../img/reflect.png'
import person from '../img/person.png'
import person1 from '../img/person1.png'
import person2 from '../img/person2.png'
import person3 from '../img/person3.png'
import top1 from '../img/top1.png'
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
                  <div className="column  is-4" style={{
                    paddingTop: "50px"
                  }}>
                    <h1 className="title is-2 has-text-primary">
                      Why PowerPatent?
                    </h1>
                    <h2 className="subtitle">
                      IP. Simplified.
                      PowerPatent helps companies manage patent and IP creation, filing, issuance, maintenance, licensing, and monetization.
                    </h2>
                    {/*<div className="field">*/}
                    {/*  <input className="input is-medium" type="text" placeholder="Work Email" />*/}
                    {/*</div>*/}
                    <button className="button  is-info" style={{
                      backgroundColor: "#faa635",
                      color: "white",
                      margin:"0.5em",
                    }}>
                      Resquest a Demo
                    </button>
                    <button className="button  is-outlined" style={{
                      borderColor: "#faa635",
                      color: "#faa635",
                      margin:"0.5em",
                    }}>
                      Take a Video Tour
                    </button>
                  </div>
                  <div className="column  is-8">
                    <figure className="image">
                      <img src={cover} alt="Kaldi"/>
                    </figure>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-1">
                  </div>
                  <div className="column has-text-centered is-10">
                    <p className="subtitle">
                      Our lawyers have worked on IP protection for
                      (logos for Intel, Applied Materials, Adobe, Shutterfly, Align Tech, Compaq, Univ Calif Berkeley, Stanford in addition to the list in the current page that hidden
                    </p>
                  </div>
                  <div className="column is-1">
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <p className="title has-text-primary is-size-4 pb-6">
                      TRUSTED BY:
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={numed} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={eoflow} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={mono} alt="Kaldi" />
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={onevalley} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={cisbay} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={micro} alt="Kaldi"/>
                    </figure>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-1">

                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={jengas} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={tartan} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={boom} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={scale} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column has-text-centered is-2">
                    <figure className="bd-focus-icon ">
                      <img src={reflect} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column is-1">

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
                {/*<div className="columns">*/}
                {/*  <div className="column is-1">*/}
                {/*  </div>*/}
                {/*  <div className="column is-10 has-text-centered">*/}
                {/*    <p className="title">*/}
                {/*      Protect your business and increase your company valuation through the IP system.*/}
                {/*    </p>*/}
                {/*    <p className="subtitle">*/}
                {/*      With Patent PC, you get great protection with precision. Our expert IP team is assisted by powerful software that accelerates our workflow and helps us make better decisions through advanced IP analytics.*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*  <div className="column is-1">*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="columns is-vcentered" >*/}
                {/*  <div className="column is-4">*/}
                {/*  </div>*/}
                {/*  <div className="column   is-justify-content-center is-4">*/}
                {/*    <figure className="image">*/}
                {/*      <img src={client} alt="Kaldi" />*/}
                {/*    </figure>*/}
                {/*  </div>*/}
                {/*  <div className="column is-4">*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <p className="title has-text-primary is-size-4 pb-6">
                      Why choose us?
                    </p>
                  </div>
                </div>
                <nav className="columns">
                  <a className="bd-focus-item column has-text-centered">
                    <p className="">
                      <strong>
                        Founders
                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      Streamline how you manage IP from founding to IPO Provisional/Utility Applications Trademark Applications
                    </p>
                    <figure className="bd-focus-icon">
                      <img src={feature1} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                  </a>
                  <a className="bd-focus-item column has-text-centered">
                    <p className="">
                      <strong>
                        Lawyers
                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      Manage IP with your clients built-in diagnostic checks, private PAIR docketing, predictive analytics & discounts for your clients
                    </p>
                    <figure className="bd-focus-icon">
                      <img src={feature2} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                  </a>
                  <a className="bd-focus-item column has-text-centered">
                    <p className="">
                      <strong>
                        Companies
                      </strong>
                    </p>
                    <p className="subtitle is-6">
                      Modernize your invention management, enforcement and monetization Invention disclosure admin, valuations, docketing, predictive analytics & portfolio insights
                    </p>
                    <figure className="bd-focus-icon">
                      <img src={feature3} alt="Kaldi" style={{ width: '100px' }}/>
                    </figure>
                  </a>
                  {/*<a className="bd-focus-item column has-text-centered">*/}
                  {/*  <figure className="bd-focus-icon">*/}
                  {/*    <img src={feature2} alt="Kaldi" style={{ width: '100px' }}/>*/}
                  {/*  </figure>*/}
                  {/*  <p className="">*/}
                  {/*    <strong>*/}
                  {/*      ADVANCED TECHNOLOGY*/}
                  {/*    </strong>*/}
                  {/*  </p>*/}
                  {/*  <p className="subtitle is-6 has-text-justified has-text-right">*/}
                  {/*    We not only understand technology, but we also developed AI software to improve our IP workflow and pass the savings to you.*/}
                  {/*  </p>*/}
                  {/*</a>*/}
                  {/*<a className="bd-focus-item column has-text-centered">*/}
                  {/*  <figure className="bd-focus-icon">*/}
                  {/*    <img src={feature1} alt="Kaldi" style={{ width: '100px' }}/>*/}
                  {/*  </figure>*/}
                  {/*  <p className="">*/}
                  {/*    <strong>*/}
                  {/*      FIXED-FEE PRICING*/}
                  {/*    </strong>*/}
                  {/*  </p>*/}
                  {/*  <p className="subtitle is-6 has-text-justified has-text-right">*/}
                  {/*    Our tech enables your disclosure to be efficiently converted to patents. Our cost-effective flat-rate pricing ensures that legal bill surprises are not in your future.*/}
                  {/*  </p>*/}
                  {/*</a>*/}
                  {/*<a className="bd-focus-item column has-text-centered">*/}
                  {/*  <figure className="bd-focus-icon">*/}
                  {/*    <img src={feature3} alt="Kaldi" style={{ width: '100px' }}/>*/}
                  {/*  </figure>*/}
                  {/*  <p className="">*/}
                  {/*    <strong>*/}
                  {/*      PERSONALIZED SERVICE*/}

                  {/*    </strong>*/}
                  {/*  </p>*/}
                  {/*  <p className="subtitle is-6 has-text-justified has-text-right">*/}
                  {/*    Get fast, responsive service. Your dedicated lawyer knows your business from the ground up.*/}
                  {/*  </p>*/}
                  {/*</a>*/}

                </nav>
              </div>
            </div>
          </section>
          {/*<section className="hero is-default is-bold">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-vcentered">
                  <div className="column is-6 is-offset-1 is-vcentered">
                    <h2 className="subtitle is-4  has-text-justified has-text-left">
                      Our results are almost 2x better than those of other law firms
                      For clients who wants to go all-the-way, our historical allowance rate has been 95%. This compares to the 55% success rate for the average US law firm. Our work is meticulously done and our diagnostics and analytics produces better results, and this shows in our past successes.
                    </h2>
                    <br />
                  </div>
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img className="is-rounded" src={descri01} alt="Kaldi"/>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img className="is-rounded"  src={descri02} alt="Kaldi"/>
                    </figure>
                  </div>
                  <div className="column is-6 is-offset-1 is-vcentered">
                    <h2 className="subtitle is-4  has-text-justified has-text-left">
                      You won’t be surprised by our fixed-fees
                      Our services are priced on a flat-fee basis, so you can budget for all your IP requirements. Others charge by the hour, and you won’t find out until they send you an invoice.  You now have control over your IP spending.
                    </h2>
                    <br />
                  </div>
                </div>
              </div>
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-6 is-offset-1 is-vcentered">
                    <h2 className="subtitle is-4  has-text-justified has-text-left">
                      Your IP first draft done in days. Not in months.
                      With first-to-file rules, time is of the essence.  From your disclosure, we can prepare first drafts in a few days with our tech-savvy professionals and our patented system.  You’ll be amazed with our responsiveness.
                    </h2>
                    <br />
                  </div>
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img className="is-rounded"  src={descri03} alt="Kaldi"/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>*/}
          <section className="section is-medium hero" style={{
            // backgroundColor: "#a9a6ff",
            paddingBottom: "0.3em",
            paddingTop: "3em"
          }}>
            <div className="overlay">
            </div>
            <div className="container">

              <div className="title has-text-centered">
                <h2 className="title is-3 light-text is-spaced">CLIENT TESTIMONIALS</h2>
                <h3 className="subtitle is-5 light-text">Prior results described on this site do not guarantee similar outcomes in future cases or transactions.</h3>
              </div>

              <div className="content-wrapper">
                <div className="columns is-vcentered">
                  <div className="column is-4">
                    <div className="box has-background-white has-text-grey-dark">
                      <div className=" is-align-items-center is-justify-content-start mt-4">
                        <a href="#" className="image">
                          <img alt="profil" src={person1} className="is-rounded" width="32" height="32"/>
                        </a>
                      </div>
                      <p>
        <span className="font-bold has-text-primary is-size-5">
            “
        </span>
                        Working with Bryant and Cognition IP has been great. They did some really thorough freedom to operate and patentability searches for us in a complicated med-device landscape.
                        <span className="font-bold has-text-primary is-size-5">
            ”
        </span>
                      </p>
                    </div>
                  </div>
                  <div className="column is-4 is-fullheight">
                    <div className="box has-background-white has-text-grey-dark" style={{
                      paddingBottom: "40px",
                      paddingTop: "40px"
                    }}>
                      <div className=" is-align-items-center is-justify-content-start mt-4">
                        <a href="#" className="image">
                          <img alt="profil" src={person2} className="is-rounded" width="32" height="32"/>
                        </a>
                      </div>
                      <p>
        <span className="font-bold has-text-primary is-size-5">
            “
        </span>
                        Cognition IP helped our firm accelerate our learning, create our IP strategy, and execute that strategy.
                        <span className="font-bold has-text-primary is-size-5">
            ”
        </span>
                      </p>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="box has-background-white has-text-grey-dark"
                         style={{
                           paddingBottom: "45px",
                           paddingTop: "45x"
                         }}>
                      <div className="is-align-items-center is-justify-content-start mt-4">
                        <a href="#" className="image">
                          <img alt="profil" src={person3} className="is-rounded" width="32" height="32"/>
                        </a>
                      </div>
                      <p>
        <span className="font-bold has-text-primary is-size-5">
            “
        </span>
                        Cognition IP developed our IP strategy for several computer vision patents. Besides being very comprehensive and having quick turnaround.
                        <span className="font-bold has-text-primary is-size-5">
            ”
        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hero">
            <div className="hero-head">
              <div  style={
                {width:"100vw",
                  position:"relative",
                  left:"0","right":"0",
                  margin:"auto",
                  backgroundSize:"cover",
                  backgroundPosition:"bottom",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  paddingTop:"10%"}
              }>
                <figure className="image">
                  <img className="pt-1 pb-1"  src={footer} alt="Kaldi"/>
                </figure>
              </div>
            </div>
            <div className=" hero hero-body is-primary" style={{
              backgroundColor: "#423D71"
            }}>
              <div className="container">
                <div className="columns">
                  <div className="column is-6">
                    <p className="title is-2">
                      Start PowerPatent today
                    </p>
                    <p className="subtitle">
                      Signing up for PowerPatent is easy. We think once you experience truly stress-free IP processes, you won’t want to go back.

                    </p>
                  </div>
                  <div className="column -is-1">

                  </div>
                  <div className="column is-5">
                    <div className="field">
                      <input className="input is-medium" type="text" placeholder="Work Email" />
                    </div>
                    <button className="button"  style={{
                      backgroundColor: "#47BFA4",
                      color: "white"
                    }}>
                      Try it Now
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
