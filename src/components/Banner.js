import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Kyle Walcott! I'm a Libertarian running for the Florida House of Representatives.</h1>
      </header>
      <div className="content">
        <p>
          Scroll down to see the issues that matter most to me.
          <br/>
          A contact form for media inquires, volunteers and general comments can be found at bottom. 
        </p>
        <ul className="actions">
          <li>
            <a href="/landing" name="Get Started" className="button next scrolly">
              Read Full Platform
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
