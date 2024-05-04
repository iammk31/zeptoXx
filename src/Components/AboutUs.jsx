import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <div>
            <div className="heading">
                <h1>About Us</h1>
                <p>
                    Empowering the Future
                </p>
            </div>
            <div className="container">
                <section className="about">
                    <div className="about-image">
                        <img src="../../images/students.jpg" alt="" />
                    </div>
                    <div className="about-content">
                        <p>zeptoX-EDUCATION is a powerful and versatile online platform
                            carefully designed to connect students with professionals who are not only dedicated to 
                            teaching and are skilled in their work. zeptoX is at the forefront of a 
                            transformative education revolution, providing a versatile platform that promises 
                            to redefine how we access and participate in high-quality education.
                            <br /> <br />
                            ZeptoX-EDUCATION heralds a groundbreaking era in education, seamlessly bridging 
                            the gap between eager learners and industry experts who, while not traditionally 
                            educators, bring unparalleled skill and expertise to the realm of teaching. 
                            This innovative online and offline course application is meticulously crafted to 
                            revolutionize our approach to education, offering a dynamic platform that reshapes 
                            the landscape of accessing and engaging with top-tier educational experiences.
                            <br /> <br />
                            ZeptoX stands as a beacon in the transformative education revolution, 
                            promising a versatile and empowering space where students and professionals 
                            converge to redefine the very essence of high-quality learning.
                            <br /> <br />
                           
                        
                        </p>
                        <a href="/pricing" className="read-more">Checkout our courses</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
