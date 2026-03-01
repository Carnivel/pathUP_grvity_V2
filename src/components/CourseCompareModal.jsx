import React from 'react';
import { X, Clock, DollarSign, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import './CourseCompareModal.css';

const CourseCompareModal = ({ courses, onClose, onRemoveCourse }) => {
    if (!courses || courses.length === 0) return null;

    return (
        <div className="course-compare-overlay">
            <div className="course-compare-container">
                {/* Header */}
                <div className="course-compare-header">
                    <h2>Course Comparison <span className="badge">{courses.length}/3</span></h2>
                    <button className="btn-close-compare" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content Table */}
                <div className="course-table-wrapper">
                    <table className="course-compare-table">
                        <thead>
                            <tr>
                                <th className="feature-col">Features</th>
                                {courses.map(course => (
                                    <th key={course.id} className="course-header-col">
                                        <div className="course-header-content">
                                            <button
                                                className="btn-remove-course"
                                                onClick={() => onRemoveCourse(course.id)}
                                                title="Remove from comparison"
                                            >
                                                <X size={16} />
                                            </button>
                                            <div className="course-icon-placeholder" style={{ background: `${course.color}15`, color: course.color }}>
                                                <GraduationCap size={24} />
                                            </div>
                                            <h3 style={{ color: course.color }}>{course.name}</h3>
                                            <p className="degree-label">{course.degree}</p>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Feature Rows */}
                            <tr>
                                <td className="feature-label"><Clock size={16} /> Duration</td>
                                {courses.map(course => (
                                    <td key={course.id}><strong>{course.duration}</strong></td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><DollarSign size={16} /> Avg Fees</td>
                                {courses.map(course => (
                                    <td key={course.id} className="highlight-fee">
                                        {course.avgFees}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><BookOpen size={16} /> Top Colleges</td>
                                {courses.map(course => (
                                    <td key={course.id}>{course.topColleges}+ Colleges</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"><CheckCircle size={16} /> Highlights</td>
                                {courses.map(course => (
                                    <td key={course.id}>
                                        <div className="highlights-stack">
                                            {course.highlights.map(h => (
                                                <span key={h} className="course-tag" style={{ borderColor: `${course.color}30`, color: course.color }}>{h}</span>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label"> Career Prospects</td>
                                {courses.map(course => (
                                    <td key={course.id}>
                                        <p className="prospects-text">{course.careerProspects}</p>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CourseCompareModal;
