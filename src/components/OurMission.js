import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowUpRightDots, faBrain, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <>
      <div style={{ marginTop: '10rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container">
        <div className="row align-items-center">



          <img
            alt="about"
            src="https://global.samera.co.uk/wp-content/uploads/2024/07/Copy-of-Strategic-Vision-and-Mission-Development-for-Accountants-3.jpg"
            className="img-fluid rounded shadow"
          //style={{ objectFit: 'contain',maxHeight: '300px'}}
          />


          <div className="col-md-6">
            <h2 className="main-title about-h2" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#333' }}>
              OUR MISSION
            </h2>
            <p className="main-p" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#555' }}>
              We are committed to providing strategic investment consulting solutions that support the sustainable development of companies within our ecosystem and enhance their competitive capabilities. By connecting capital, knowledge, and collaborative networks, we aim to empower businesses and create long-term value for investors and the community.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-16 p-8">
          <div className="images-banner">
            <div className="image-item">
              <div>
                <FontAwesomeIcon icon={faArrowTrendUp}
                  style={{ fontSize: '30px', color: '#333' }} // Apply specific size and color
                />
              </div>
              <div style={{ fontWeight: "bold", fontSize: '20px', lineHeight: '41px' }}>Supporting Growth</div>
              <div className="tesst1" style={{ fontSize: '16px' }}>
                Providing consulting and financial services to  optimize growth potential for companies  within the ecosystem
              </div>
            </div>
            
            <div className="image-item">
            <div>
                <FontAwesomeIcon icon={faBuilding} 
                  style={{ fontSize: '30px', color: '#333' }} // Apply specific size and color
                />
                  </div>
              <div style={{ fontWeight: "bold", fontSize: '20px', lineHeight: '41px' }}>Building Networks</div>
              <div className="tesst2" style={{ fontSize: '18px' }}>
                Establishing strong relationships among companies to  encourage collaboration and resource sharing
              </div>
            </div>
            <div className="image-item">
            <div>
                <FontAwesomeIcon
                  icon={faArrowUpRightDots} 
                  style={{ fontSize: '30px', color: '#333' }} // Apply specific size and color
                />
                  </div>
              <div style={{ fontWeight: "bold", fontSize: '20px', lineHeight: '41px' }}>Sustainable Development</div>
              <div className="tesst3" style={{ fontSize: '18px' }}>
                Investing in projects and companies with social significance  ensuring that economic development goes hand in hand  with environmental protection.
              </div>
            </div>
          </div>
          <div className="images-banner">
            <div className="image-item">
            <div>
                <FontAwesomeIcon icon={faBrain} 
                  style={{ fontSize: '30px', color: '#333' }} // Apply specific size and color
                />
                  </div>
              <div style={{ fontWeight: "bold", fontSize: '20px', lineHeight: '41px' }}>Enhancing Capabilities</div>
              <div className="tesst4" style={{ fontSize: '18px' }}>
                Offering training and technical support to help
                companies improve their management and operational skills
              </div>
            </div>
            <div className="image-item">
            <div>
                <FontAwesomeIcon icon={faUsers} 
                  style={{ fontSize: '30px', color: '#333' }} // Apply specific size and color
                />
                  </div>
              <div style={{ fontWeight: "bold", fontSize: '20px', lineHeight: '41px' }}>Creating Partner Value</div>
              <div className="tesst5" style={{ fontSize: '18px' }}>
                Ensuring that all stakeholders benefit from our
                investment activities
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
