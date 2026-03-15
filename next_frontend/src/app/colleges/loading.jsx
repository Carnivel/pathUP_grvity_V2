import React from 'react';
import './CollegeFinder.css';

export default function Loading() {
    return (
        <div className="college-finder-page">
            <section className="finder-header">
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="skeleton" style={{ width: '300px', height: '40px', marginBottom: '10px' }}></div>
                    <div className="skeleton" style={{ width: '400px', height: '20px' }}></div>
                </div>
            </section>
            <div className="container">
                <div className="finder-layout">
                    {/* Skeleton Sidebar */}
                    <aside className="filter-sidebar desktop-only">
                        <div className="skeleton" style={{ width: '100%', height: '30px', marginBottom: '20px' }}></div>
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="filter-group">
                                <div className="skeleton" style={{ width: '100px', height: '20px', marginBottom: '10px' }}></div>
                                <div className="skeleton" style={{ width: '100%', height: '40px' }}></div>
                            </div>
                        ))}
                    </aside>
                    {/* Skeleton Results */}
                    <main className="finder-results">
                        <div className="results-header" style={{ justifyContent: 'space-between' }}>
                            <div className="skeleton" style={{ width: '150px', height: '30px' }}></div>
                            <div className="skeleton" style={{ width: '150px', height: '30px' }}></div>
                        </div>
                        <div className="college-grid">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="college-card" style={{ minHeight: '350px' }}>
                                    <div className="skeleton" style={{ width: '100%', height: '150px' }}></div>
                                    <div className="card-content">
                                        <div className="skeleton" style={{ width: '80%', height: '25px', marginBottom: '10px' }}></div>
                                        <div className="skeleton" style={{ width: '40%', height: '15px', marginBottom: '15px' }}></div>
                                        <div className="course-tags" style={{ display: 'flex', gap: '8px' }}>
                                            <div className="skeleton" style={{ width: '60px', height: '20px' }}></div>
                                            <div className="skeleton" style={{ width: '60px', height: '20px' }}></div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="skeleton" style={{ width: '40%', height: '20px' }}></div>
                                        <div className="skeleton" style={{ width: '30%', height: '35px', borderRadius: '20px' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
