import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CoursesPage from './pages/Courses';
import Services from './pages/Services';
import TermsAndConditions from './pages/TermsAndConditions';
import CourseContent from './pages/CourseContent';
import Module from './pages/Module';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/courses/:url" element={<CourseContent />} />
                    <Route path='/courses/:url/offline/:id' element={<Module />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
