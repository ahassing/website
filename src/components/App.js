import React from 'react';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const App = () =>  {
  return (
    <div className="ui container">
      <h1 className="ui center aligned header">Andrew Hassing</h1>
      <NavigationBar />
      <AboutMe />
      <Blog />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
