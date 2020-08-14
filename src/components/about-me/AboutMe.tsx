import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { ABOUT_ME as aboutMe } from '../../constants/about-me.constant';

import './AboutMe.css';

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="section--wrapper">
        <div className="about-section-1">
          <Container>
            <Grid className="grid-container" container spacing={2}>
              <Grid className="padded-2x" item xs={4}>
                <div className="about-nav-container">
                  <div className="about-nav font--sacramento">
                    <a href="/" className="gray-font--1">home</a>
                  </div>
                  <div className="about-nav-line"></div>
                </div>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Container>
        </div>

        <div className="about-section-2 purple-background">
          <Container>
            <Grid className="grid-container" container spacing={2}>
              <Grid className="padded-2x" item xs={4}></Grid>
              <Grid className="padded-2x" item xs={4}>
                <div className="about-image-wrapper">
                  <div className="about-image-container">
                    <img className="about-image" src="assets/about--image.jpg"/>
                    <div className="about-image-title white-font font--sacramento">About Me.</div>
                  </div>
                </div>
              </Grid>
              <Grid className="padded-2x" item xs={4}></Grid>
            </Grid>
          </Container>
        </div>

        <div className="about-section-3 padded-4y">
          <Container>
            <p className="about-description gray-font--1">My name is Jessica Prieto Antonious. I was born and raised in the Philippines and moved to Canada with my whole family in 2012. I graduated from University of Alberta with a degree in Computer Engineering. Right now, I am happily married and living in Ottawa, Ontario with my husband and my lovely cat.</p>

            <h1 className="about-title font--sacramento">Life outside work</h1>
            <div className="about-image--row">
              <img src="/assets/outdoor--1.jpg"></img>
              <img src="/assets/outdoor--2.JPG"></img>
              <img src="/assets/outdoor--3.JPG"></img>
              <img src="/assets/outdoor--4.JPG"></img>
            </div>

            <p className="about-description gray-font--1">If not working, I love going outdoors. One of my most favourite activities is going hiking. Moving to Alberta has been such a blessing because I get to live close to the mountains. Going back to my parent’s place in Calgary means I get to be close to Banff which is my absolute favourite place. When I moved to Ottawa, I’m glad that we’re still at least close to some mountains in Chelsea.</p>
            
            <div className="about-image--row">
              <img src="/assets/interests--2.JPG"></img>
              <img src="/assets/interests--3.JPG"></img>
              <img src="/assets/interests--1.JPG"></img>
            </div>

            <p className="about-description gray-font--1">Music is another one of my passions. I learned how to play guitar when I was 10 years old. A couple years later, I took some beginner piano lessons. I love using these instruments while singing. I enjoy making covers. Right now I’ve been obsessed with listening to show tunes, particularly songs used in Broadway and in Disney movies. I’m a big musical fanatic. I’ve only seen a couple of musicals live. One is Les Miserables when the tour company went to Calgary, and another one was Anastasia on Broadway when I went to New York.</p>
            <p className="about-description gray-font--1">One more thing that I really like doing that I believe really resonates as to why I ended up in the field that I am in, is my interest in art. I don’t think I am good at it, but I have such big interests when it comes to coming up with ideas and bringing those ideas to life. I like drawing and painting. There’s something very therapeutic about it. I like taking photographs and processing photos on Photoshop to give more life and beauty to photos.</p>
          
            <div className="about-image--row">
              <img src="/assets/disney--1.jpg"></img>
              <img src="/assets/disney--2.JPG"></img>
              <img src="/assets/disney--3.JPG"></img>
            </div>

            <p className="about-description gray-font--1">Last but not least, I have the biggest obsession with anything Disney. I love the movies, especially the more classical ones. I love going to the parks. I have made it a goal to go to each park around the world.</p>
          

            <h1 className="about-title font--sacramento">Software developer</h1>

            <div className="about-image--row">
              <img src="/assets/work--1.JPG"></img>
              <img src="/assets/university--1.JPG"></img>
            </div>

            <p className="about-description gray-font--1">Prior to going into university and choosing to go to the Computer Engineering program, I didn’t really have any experience in programming. I chose it mainly because I was just interested in the field and it’s something that I saw myself establishing a career with.</p>
            <p className="about-description gray-font--1">My favourite university highlight is being an active member of the Computer Engineering club. Being part of that organization has expanded my knowledge on different industries that I could potentially go to. I helped organize hackathons for a while before I myself joined one. </p>
            <p className="about-description gray-font--1">I do enjoy developing for websites and mobile apps. My only work experience currently is on full stack web development. I have dipped my toes into native Android development while in university, and I really enjoyed that experience. That’s why I also get into mobile development hopefully at some point in the future.</p>
          </Container>
        </div>
      </div>
    );
  }
}