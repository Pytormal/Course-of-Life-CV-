import React from 'react';
// import { Link, NavLink, Route, Switch } from 'react-router-dom';
import VideoBg from "reactjs-videobg";
// import mp4 from "./components/girl.mp4";

import ProExp from './components/ProExp'
import Edu from './components/Edu'
import Skills from './components/Skills'
import Vol from './components/Volunteer'

import './components/reset.css'
import './components/main.css'

class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <section className='App'>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="h-container">
          <nav>  <h1 className="header">AlexAndrew Mallory</h1>
          <div className='address'>
              Olympia, WA 98513
          </div>
            {/* <a>no number available</a> */}
              <a href='mailto:mallory.alexandrew@gmail.com'>mallory.alexandrew@gmail.com</a>
          </nav>
        
        </div>
        <ProExp />
        <Edu />
        <Skills />
        <Vol />
        <div className='reference'>if you need referrences, please do ask</div>
        <VideoBg >
          <VideoBg.Source src={'https://player.vimeo.com/external/298808280.sd.mp4?s=d438fd942d0070e46ad3a1c99b0f19875932d21c&profile_id=164&oauth2_token_id=57447761'} type="" />
        </VideoBg>
        <nav className='bottom-nav'>
          <a className='port'
            href="https://portfolio4444.netlify.app/"
            target="_blank" rel="noopener noreferrer"
          >here is my portfolio of projects (needs updating)</a>
          <ul class="bottom-nav">
          <div className='port social'>(social media content needs updating as well) </div> 
            <section class="fa-do">
              <a
                class="fa fa-linkedin"
                href="https://www.linkedin.com/in/mallory-alexandrew/"
                target="_blank" rel="noopener noreferrer"
              ></a>

              <a
                class="fa fa-facebook"
                href="https://www.facebook.com/pytormal"
                target="_blank" rel="noopener noreferrer"
              ></a>

              <a
                class="fa fa-twitter"
                href="https://www.twitter.com/pytormal"
                target="_blank" rel="noopener noreferrer"
              ></a>

              <a
                class="fa fa-instagram"
                href="https://www.instagram.com/alexandrewmallory/"
                target="_blank" rel="noopener noreferrer"
              ></a>
            </section>
          </ul>
      
        </nav>

      </section>


    );
  }
}

export default App;

 {/* <nav>
     
       <Link to="/Home">Home</Link>
       <Link to="/">Login</Link>
       <Link to='/Register'>Register Here</Link>
</nav>
  

    <Switch>
         <Route path="/Home">
          <Home />
        </Route>
        <Route exact path="/">
          <LoginForm/>
       </Route>
       <Route exact path="/Register">
          <RegisterForm/>
        </Route>
      </Switch>  */}