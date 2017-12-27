import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/FooterContainer'
import Header from './components/header/HeaderContainer'
import Nav from './components/header/Nav'
import Menu from './components/menu/MenuContainer'
import About from './components/content/About'
import EdRes from './components/content/EducationalResources'
import News from './components/content/News'
import Contact from './components/content/Contact'
import ReviewContainer from './components/content/ReviewContainer'
import SpineImage from './components/header/SpineImage'
import CallToday from './components/content/CallToday'
import Awards from './components/header/Awards'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= "container">
          <CallToday/>
          <Awards/>
          <Header/>
          <Nav/>
          <SpineImage/>
          <Menu/>
          <Route exact path="/" render={About} />
          <Route path="/educate" render={EdRes} />
          <Route path="/reviews" component={ReviewContainer} />
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={News} />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;