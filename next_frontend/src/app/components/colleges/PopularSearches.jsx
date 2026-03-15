import React from 'react';
import Link from 'next/link';
import { coursePrograms, citiesByState } from '../../../data/collegesData';
import './PopularSearches.css';

export default function PopularSearches() {
    // Generate popular combinations dynamically
    const generatePopularSearches = () => {
        const topCourses = ['B.Tech', 'MBA', 'MBBS', 'BCA', 'B.Sc Nursing'];
        const topCities = ['Bangalore', 'Pune', 'Delhi NCR', 'Chennai', 'Mumbai'];
        
        const searches = [];
        
        topCourses.forEach(course => {
            topCities.forEach(city => {
                // Determine format based on city (e.g. "Delhi NCR" vs "Bangalore")
                const displayCity = city === 'Delhi NCR' ? 'Delhi NCR' : city;
                // Find course id for routing
                const courseData = coursePrograms.find(c => c.label === course || c.id === course);
                const courseSlug = courseData ? courseData.id.toLowerCase().replace(/[^a-z0-9]/g, '') : course.toLowerCase().replace(/[^a-z0-9]/g, '');
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                
                searches.push({
                    id: `${courseSlug}-${citySlug}`,
                    label: `Top ${course} Colleges in ${displayCity}`,
                    href: `/colleges?course=${encodeURIComponent(courseData ? courseData.id : course)}&city=${encodeURIComponent(city)}`
                });
            });
        });

        // Add some state-based searches as well
        searches.push({
             id: 'engineering-maharashtra',
             label: 'Top Engineering Colleges in Maharashtra',
             href: '/colleges?stream=engineering&state=Maharashtra'
        });
        searches.push({
            id: 'medical-karnataka',
            label: 'Top Medical Colleges in Karnataka',
            href: '/colleges?stream=medical&state=Karnataka'
       });

        // Return the first 12 matches for a stable, consistent order
        return searches.slice(0, 12); 
    };

    const searches = generatePopularSearches();

    return (
        <section className="popular-searches-section">
            <div className="container">
                <div className="popular-searches-header">
                    <h2>Popular Searches</h2>
                    <p>Explore top colleges by courses and cities</p>
                </div>
                
                <div className="popular-searches-container">
                    <div className="popular-searches-scroll">
                        {searches.map((search) => (
                            <Link 
                                key={search.id} 
                                href={search.href} 
                                className="popular-search-chip"
                            >
                                {search.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
