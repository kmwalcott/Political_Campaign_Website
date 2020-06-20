import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import books from '../assets/images/kimberly-farmer-books.jpg'
import college from '../assets/images/college.jpg'
import marijuana from '../assets/images/matthew-brodeur-marijuana.jpg'
import healthcare from '../assets/images/healthcare.jpg'
import housing from '../assets/images/housing.jpg'
import donald_trump from '../assets/images/donald-trump.jpg' 
import Banner from '../components/Banner'
import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Kyle Walcott for Florida House"
          meta={[
            { name: 'description', content: 'Elect Kyle Walcott to the Florida House of Representatives!' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${books})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>K-12 Education</h3>
                  <p>Privatizing public schools and ending compulsory schooling</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${college})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Postsecondary Education</h3>
                  <p>Rejecting the "college for all" agenda</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${marijuana})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Victimless Crimes</h3>
                  <p>Legalizing recreational marijuana and prostitution</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${healthcare})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Healthcare</h3>
                  <p>Licensing reform and deregulation</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${housing})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Affordable Housing</h3>
                  <p>Allowing developers to build much-needed housing for Floridians with lower incomes</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${donald_trump})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Statement on President Donald Trump</h3>
                  <p>I am not a supporter.</p>
                </header>
              </Link>
            </article>
          </section>
          
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
