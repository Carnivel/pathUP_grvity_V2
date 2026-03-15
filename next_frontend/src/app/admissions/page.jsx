import React from 'react';
import PageTransition from '../../components/PageTransition';

const Admissions = () => {
    return (
        <PageTransition>
            <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', margin: '1rem 0' }}>Admissions Guidance</h1>
                <p>Get personalized guidance for your college admissions.</p>
            </div>
        </PageTransition>
    );
};

export default Admissions;
