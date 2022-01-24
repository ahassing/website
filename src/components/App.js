import React from 'react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="ui container" style={{paddingTop: '20px'}}>
      <h1 className="ui center aligned header">Andrew Hassing</h1>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
