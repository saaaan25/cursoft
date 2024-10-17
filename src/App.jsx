// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// import Home from './components/Home.jsx' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Para React Router
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CoursesPage from './pages/Courses';
import Services from './pages/Services';
import TermsAndConditions from './pages/TermsAndConditions';
import CourseContent from './pages/CourseContent';
import { AuthProvider } from './providers/AuthContext.jsx';

const App = () => {
    return (
      <AuthProvider>
        <Router>
            <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="/courses/:name" element={<CourseContent />} />
                    </Routes>
            </div>
        </Router>
      </AuthProvider>
    );
};

export default App;
