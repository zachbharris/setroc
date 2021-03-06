import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../Footer';
import Section from '../../Section';
import Title from '../../Title';

class Mentoring extends Component {
  render() {

    const pageName = "Mentoring";
    const pageDescription = "I'm here to help. After many requests for a mentorship service from me and my own personal views on the value of mentoring, you can now book a 1-on-1 45-minute chat with me.";

    return (
      <div id={pageName} className="black pt4-l">

        <Helmet>
          <title>Dennis Cortés - {pageName} 🤓</title>
          <meta name="description" content={pageDescription} />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@fromcortes"/>
          <meta name="twitter:creator" content="@fromcortes"/>
          <meta name="twitter:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={`Dennis Cortés - ${pageName}`}/>
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.cortes.us/${pageName}`} />
          <meta property="og:image" content="https://www.cortes.us/images/dennis-cortes-meta-photo.jpg"/>
        </Helmet>

        <div className="w-100 bg-dot-grid bg-black-blue center pv4 ph0-ns z-0 tl smooth-text">
          <div className="animated fadeIn center w-90">
            <h1 className="f-subheadline-ns f1 fw3 lh-title blur-skew white tracked-tiny">{pageName}</h1>
            <p className="fw5 f4 lh-subtitle measure white-90 mb5" style={{letterSpacing: 0.8 + "px"}}>
              {pageDescription}
            </p>
          </div>
        </div>

        <a className="bottom-1 right-1 fixed link bn fw6 f6 ttu tc dib dim ph3 pv2 white bg-gradient pointer br2 mt3 z-max" href="#MentoringPay">
          Get Started
        </a>

        <div className="animated fadeIn w-75-l w-90 center mv5">
          <div className="content-end flex flex-wrap">
            <div className="items-start relative ph4 pv3 w-50-ns w-100">
              <Title title="What is this & what to expect?" />
              <p className="lh-copy black-60 measure mb4">
                Mentoring from me is a great way to ask any questions you may have about
                work approach and/or methodologies from my perspective. Through the amount
                of experience and time I've put into what I know, you will leave our
                session with insight and actionable steps for your own career. I'll also provide any
                resources and connections I can to help you improve and save you from the hours
                I've put into finding and learning them.
              </p>
              <Title title="Example Topics:" />
              <ul className="lh-copy pl0 black-60">
                <li>Want to learn my illustration tricks and process?</li>
                <li>Not sure how to do something in code?</li>
                <li>Want my advice on a topic or decision?</li>
                <li>Want to ask about the tech industry?</li>
                <li>Want to know how to learn parts of design or code?</li>
                <li>Need help finding a job?</li>
                <li>How did I build a social platform of +750k people?</li>
                <li>Need help communicating with stakeholders?</li>
                <li>Anything you can think of!</li>
              </ul>
            </div>

            <div className="items-start relative ph4 pv3 w-50-ns w-100">
              <Title title="Why Charge for Mentoring?" />
              <p className="lh-copy black-60 measure mb4">
                I want us to both be serious about this mentorship and the value I'll
                be providing for you. Our time is important and I want to give you
                dedicated time for the questions you have. I truly believe I'll provide
                value beyond what you pay through my years of experience on both
                professional and personal design and development projects and career.
              </p>
              <p className="lh-copy black-60 measure mb4">
                I also understand how important it is to get valuable mentorship
                in your career. I've been lucky enough to have some great mentors
                in my life and want to give you that same value as best I can. All expertise, advice,
                resources, connections, and tools I provide to you during our session took
                years of hard work for me to learn and gather. With a mentorship session,
                I happily bring these to you and openly to give you the headstart I wish I had.
              </p>
            </div>
          </div>

          <Section
            id="MentoringPay"
            title="Step 1: Payment!"
            description="Payments are made securely through Plasso and Stripe"
            number="$75" />
          <div className="mb6 tc">
            <p className="lh-copy black-60 mt4 measure center">
              Let me help you by being a resource for knowledge on any unknowns you have. Plus,
              we'll both make a new friend in the process! Can't think of a better win-win situation.
            </p>
            <a href="https://plasso.com/s/sNVVpajJ7M" className="plo-button link bn fw6 f6 ttu dib button-reset dim ph3 pv2 white bg-gradient pointer br2 mt3">
              Purchase
            </a>
          </div>

          <Section
            id="MentoringDate"
            title="Step 2: Choose a Date and Time!"
            description="Check below for a day and time that works for you. Any weekday after 7pm is best for me"
            number="45 min" />
          <span className="dib center tc mb4 f7 black-60">Calendar not loading? <a href="https://calendly.com/cortes/mentorship" className="link black underline rainbow-hover">Click here please!</a></span>
          <div className="w-100 h-100 mb6 br3 shadow-large calendly-inline-widget" data-url="https://calendly.com/cortes/mentorship"></div>

          <Section
            id="MentoringConfirm"
            title="Step 3: I'll See You There!"
            description="You should receive confirmation for our date and I'll be sure to follow up before our session!"
            number="👋" />
          <p className="lh-copy black-60 mt4 mb6 measure tc center">
            If you have any questions feel free to reach out at <a href="mailto:hi@cortes.us" className="link black underline rainbow-hover">hi@cortes.us</a>,
            I'm excited for our session and to meet you!
          </p>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Mentoring;
