import React from 'react';
import PageTransition from '../components/PageTransition';

const About = () => {
    return (
        <PageTransition>
            <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', margin: '1rem 0' }}>About PathUp</h1>
                <p>Your trusted partner in navigating higher education choices.</p>
            </div>
        </PageTransition>
    );
};

export default About;
