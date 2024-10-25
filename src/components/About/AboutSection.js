import React, { useState } from 'react';
import './About.css';
import Navbar from '../Home/Navbar';
import About from '../OurMission';
import Footer from '../Home/Footer';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AboutSection = () => {
    return (
        <>
            <Helmet>
                <title>About | Draco Holding</title>
            </Helmet>
            <Navbar />
            <div className="about-section">
                <div className="about-section-text">
                    <h1>About Draco Holdings</h1>
                </div>
                <div className="about-section-image">
                    <img src="https://static.wixstatic.com/media/51a01d_4c356886dc58403f90c2f2b7bc3eff0e~mv2.png/v1/fill/w_1142,h_425,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/51a01d_4c356886dc58403f90c2f2b7bc3eff0e~mv2.png" alt="Technology" />
                </div>
            </div>
            <div class="about-description">
                <p>
                    Founded in 2024, Draco Investment Consulting Company has quickly established its position in the investment consulting field within the broader ecosystem. With an investment fund that provides and maintains capital for companies, Draco is not just a consultant but also a strategic partner, accompanying businesses on their development journey
                </p>
                <p>
                    Draco adopts a comprehensive approach, from market analysis and investment potential assessment to providing flexible financial solutions. The experienced team of experts at Draco is always ready to listen and offer advice tailored to the specific needs of each client
                </p>
                <p>The story of Draco is not just the journey of an investment consulting company, but also a narrative of dreams, aspirations for growth, and a desire to create value for the community. With a clear direction and a professional team, Draco believes it will continue to accompany businesses on the path to development and success in the future</p>
            </div>
            <div className="container-aboutt">
                <NavLink to="#" className="item-about">Our global network</NavLink>
                <NavLink to="#" className="item-about">Our Board of Directors</NavLink>
                <NavLink to="#" className="item-about">Board Committees</NavLink>
                <NavLink to="#" className="item-about">Corporate Information</NavLink>
                <NavLink to="#" className="item-about">Corporate Governance & Sustainability</NavLink>
            </div>
            <div class="vision-section">
                <div class="vision-image">
                    <img src="https://static-images.vnncdn.net/files/publish/2023/9/26/chuyen-doi-so-2-807.jpg" alt="Vision Image" />
                </div>
                <div class="vision-content">
                    <h2>Our vision</h2>
                    <h3>Draco aims to become the leading investment consulting center in Vietnam, guiding sustainable development for the companies within our ecosystem through strategic investment funds, in order to optimize growth potential and enhance competitive capacity for many years to come.</h3>
                    <ul>
                        <li><strong>Become a Leading Investor:</strong> Draco aims to be a reputable and influential investor in its ecosystem</li>
                        <li><strong>Provide Capital, Knowledge, and Support:</strong> In addition to investment capital, the company will offer in-depth knowledge about management, strategy, technology, etc., as well as other necessary support to the companies in the ecosystem</li>
                        <li><strong>Sustainable Development and Long-term Success:</strong> The ultimate goal is to help the companies in the ecosystem achieve sustainable growth and development over many years, not just short-term profits.</li>
                    </ul>
                    <h3>This vision clearly reflects the goal of becoming a top investor, providing not only capital but also knowledge and support for the companies in the ecosystem to develop sustainably in the long term. This will create strength and core value for both Draco and the companies within its ecosystem.</h3>
                </div>
            </div>
            <div class="vision-section">
                <div class="vision-content">
                    <h2>Our Mission</h2>
                    <h3>We are committed to providing strategic investment consulting solutions that support the sustainable development of companies within our ecosystem and enhance their competitive capabilities. By connecting capital, knowledge, and collaborative networks, we aim to empower businesses and create long-term value for investors and the community.</h3>
                    <ul>
                        <li><strong>Supporting Growth:</strong> Providing consulting and financial services to optimize growth potential for companies within the ecosystem</li>
                        <li><strong>Building Networks:</strong> Establishing strong relationships among companies to encourage collaboration and resource sharing</li>
                        <li><strong>Sustainable Development:</strong> Investing in projects and companies with social significance, ensuring that economic development goes hand in hand with environmental protection</li>
                        <li><strong>Enhancing Capabilities:</strong> Offering training and technical support to help companies improve their management and operational skills</li>
                        <li><strong>Creating Partner Value:</strong> Ensuring that all stakeholders benefit from our investment activities</li>
                    </ul>
                </div>
                <div class="vision-image">
                    <img src="https://static.wixstatic.com/media/51a01d_7718489da01d4edb970bcd410aa81b06~mv2.png/v1/fill/w_951,h_698,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/51a01d_7718489da01d4edb970bcd410aa81b06~mv2.png" alt="Vision Image" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutSection;
