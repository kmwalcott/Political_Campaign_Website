import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Kyle</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>After college, I struggled with underemployment. Even with a fancy degree from a fancy school, I lived with my parents for several years after graduation. Florida has one of the highest percentages of young people living with their parents. With low wages, few good-paying jobs compared to many other states, and ever increasing housing costs, Florida can be a brutal place to make a living. Many Floridians are struggling. That radicalized me to the right and inspired me to get involved in libertarian politics.</p>
                    <p>I have played violin for 20 years, including through most of grade school and college. Before moving to Illinois for college, I played with the All-County and All-State Orchestras every year, as well as with the Florida Symphony Youth Orchestra. I particularly enjoy classical music from the 20th and 21st centuries, and love to perform and see live performances of that music whenever I can. As a teacher I help my students to grow every day and discover the rich tradition of western classical music.</p>
                    <p>I am also a self-taught web developer.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic