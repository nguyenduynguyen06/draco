import React from 'react';
import './Css/Advantage.css';

const Advantage = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };
    return (
        <section className="isdn-advantage">
            {/* Section hình ảnh với tiêu đề */}
            <div className="advantage-image">
                <h1 className="advantage-title">The Draco advantage</h1>
            </div>

            {/* Phần này chứa các hình ảnh khác mà bạn đã thêm */}
            <div className="advantage-cards">
                <div className="card-advantage">
                    <img src="./hinh1.jpg" alt="Image 1" />
                    <div className="card-advantage-content">
                        <strong>Experience</strong>
                        <div>Over 30 years of technology innovation and growth</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="https://via.placeholder.com/200" alt="Image 2" />
                    <div className="card-advantage-content">
                        <strong>Industries</strong>
                        <div>We have solutions and experience in every major industrial sector</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="https://via.placeholder.com/200" alt="Image 3" />
                    <div className="card-advantage-content">
                        <strong>Technologies</strong>
                        <div>From motion control to precision manufacturing, system integration and machine intelligence</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="https://via.placeholder.com/200" alt="Image 4" />
                    <div className="card-advantage-content">
                        <strong>Local</strong>
                        <div>Over 80 locations throughout Asia and a proven ability to deliver on-location</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="https://via.placeholder.com/200" alt="Image 5" />
                    <div className="card-advantage-content">
                        <strong>Results</strong>
                        <div>Delivered advanced solutions to over 10,000 customers in over 30 years of our history</div>
                    </div>
                </div>
            </div>
            <div style={{marginBottom:"50px"}}>
                <div style={{fontSize:"20px"}}>
                    Our customers choose us because of our complete approach to delivering results.<br />
                    We know it takes more than just great engineering to deliver automation results.<br />
                    We bring industry knowledge, local service, and results-focus to our solutions.
                </div>
                <button className="grow-button" onClick={scrollToBottom}>Contact us to explore a solutions </button>
            </div>
        </section>
    );
};

export default Advantage;
