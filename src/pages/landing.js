import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import healthcare from '../assets/images/healthcare.jpg'
import housing from '../assets/images/housing.jpg'
import books from '../assets/images/kimberly-farmer-books.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Statement on President Donald Trump</h2>
                    </header>
                    <p>I am not a supporter of the president. I happily voted for the Libertarian Party presidential candidate in the 2016 and 2020 general elections. It has pained me to see the overwhelming majority of republican politicians and voters, many of whom I respect, fall in line behind a man who is so unfit for the office that he holds. Of course, I am aware that many Floridians see the situation differently. I am running to represent all constituents of the district, whether they support the president or not. On that question, as well as others, we will simply have to respectfully disagree, and that is ok.</p>

                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/landing" className="image">
                        <img src={books} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Education</h3>
                            </header>
                            <p>Kyle supports the <strong>privatization</strong> of all public schools in the state and a <strong>repeal of Florida's compulsory schooling law.</strong></p>
                            <p>Most of us do not use what we learned in school in our jobs or in our daily lives. School is extremely stressful for children and their parents, and robs them of the opportunity to pursue work and leisure. Public schools are also very costly to taxpayers. The massive expenditures on education are especially puzzling in Florida, where most jobs are in the service sector and require little formal schooling. All Floridians will benefit from the state government reducing its role in this area.</p>
                            <p>As with K-12 education, public spending on postsecondary education is not the wisest use of taxpayer money. We have too many kids across the country graduating from college, only to realize too late that it didn't really help their career that much. Underemploymnt is a huge problem, and bipartisan calls for "more education" as a tool for social mobility are the cause. We must <strong>aggressively discourage kids from going to college that should not be going.</strong></p>
                            <ul>
                                <li>Reduce funding for Florida's public universities</li>
                                <li>Zero out funding for need-based scholarships</li>
                                <li> Bar students from using student loans and scholarships to obtain degrees with poor financial returns for students, such as arts degrees</li>
                                <li>Eliminate majors with poor financial returns for students, such as arts programs</li>
                                <li>Remove the college degree requirement for public school teachers</li>
                                <li>Modify public school guidance counselor requirements to encourage more people with private sector experience to become guidance counselors, especially those with expertise in the trades and other practical professions</li>
                            </ul>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/landing" className="image">
                        <img src={healthcare} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Healthcare</h3>
                            </header>
                            <p>Republican leaders in the legislature have been working diligently to lower healthcare costs for Floridians through deregulation. In addition to aiding those efforts, Kyle looks forward to leading an examination into whether <strong>relaxing medical licensing requirements</strong> can further lower prices.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/landing" className="image">
                        <img src={housing} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Affordable Housing</h3>
                            </header>
                            <p>Florida must follow in the footsteps of states and cities like Oregon and Minneapolis. These localities have decided to stand up to powerful homeowners and local politicians that use onerous land-use regulations to keep housing scarce, pricing the poorest out of their communities. Kyle supports a state-wide <strong>ban on single-family zoning.</strong></p>
                            
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing