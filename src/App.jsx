import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CollegeFinder from './pages/CollegeFinder';
import Admissions from './pages/Admissions';
import About from './pages/About';
import CareerPaths from './pages/CareerPaths';
import Exams from './pages/Exams';
import ExamDetails from './pages/ExamDetails';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CareerDetails from './pages/CareerDetails';
import Scholarships from './pages/Scholarships';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colleges" element={<CollegeFinder />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/careers" element={<CareerPaths />} />
            <Route path="/careers/:careerId" element={<CareerDetails />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exams/:id" element={<ExamDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/scholarships" element={<Scholarships />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
