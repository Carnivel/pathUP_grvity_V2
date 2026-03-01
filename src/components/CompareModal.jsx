import React from 'react';
import { X, CheckCircle, MapPin, Building2, Star, BookOpen, TrendingUp, IndianRupee } from 'lucide-react';
import './CompareModal.css';

const CompareModal = ({ colleges, onClose, onRemoveCollege }) => {
    if (!colleges || colleges.length === 0) return null;

    return (
        <div className="compare-modal-overlay">
            <div className="compare-modal-container">
                {/* Header */}
                <div className="compare-modal-header">
                    <h2>College Comparison <span className="badge">{colleges.length}/6</span></h2>
                    <button className="btn-close-modal" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content Table / Grid */}
                <div className="compare-table-wrapper">
                    <table className="compare-table">
                        <thead>
                            <tr>
                                <th className="feature-col">Features</th>
                                {colleges.map(college => (
                                    <th key={college.id} className="college-header-col">
                                        <div className="college-header-content">
                                            <button
                                                className="btn-remove-college"
                                                onClick={() => onRemoveCollege(college.id)}
                                                title="Remove from comparison"
                                            >
                                                <X size={16} />
                                            </button>
                                            <div className="college-logo-placeholder">
                                                <Building2 size={24} color="var(--color-primary)" />
                                            </div>
                                            <h3>{college.name}</h3>
                                            <button className="btn-primary-outline btn-sm">Apply Now</button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Feature Rows */}
                            <tr>
                                <td className="feature-label"><MapPin size={16} /> Location</td>
                                {colleges.map(college => (
                                    <td key={college.id}>{college.location}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><Building2 size={16} /> Institution Type</td>
                                {colleges.map(college => (
                                    <td key={college.id}>
                                        <span className={`type-badge inline ${college.is_government_or_private?.includes('Public') ? 'public' : 'private'}`}>
                                            {college.is_government_or_private || 'N/A'}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><Star size={16} /> Rating</td>
                                {colleges.map(college => (
                                    <td key={college.id}>
                                        <div className="rating-value">
                                            <Star size={16} fill="var(--color-rating)" color="var(--color-rating)" />
                                            <strong>{college.rating}</strong> / 5
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><IndianRupee size={16} /> First Year Fees</td>
                                {colleges.map(college => (
                                    <td key={college.id} className="highlight-fee">
                                        ₹{college.courses && college.courses.length > 0 ? college.courses[0].tuition_fee : 'N/A'}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><BookOpen size={16} /> Popular Streams</td>
                                {colleges.map(college => (
                                    <td key={college.id}>
                                        <div className="tags-stack">
                                            {college.courses && college.courses.slice(0, 3).map((course, idx) => (
                                                <span key={idx} className="tag">{course.specialization}</span>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><TrendingUp size={16} /> Expected Cutoff</td>
                                {colleges.map(college => (
                                    <td key={college.id}>{college.expectedCutoff || 'N/A'}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompareModal;
