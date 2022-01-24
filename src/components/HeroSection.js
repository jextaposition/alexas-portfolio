import React from 'react';
import HeroImg from '../assets/images/mypic.JPG';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import HeroStyles from '../styles/HeroStyles';

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className='hero'>
        <div className='container'>
          <h1 className='hero__heading'>
            <span>Hello, This is:</span>
            <span className='hero__name'>Alexa Hayes</span>
          </h1>
          <div className='hero__img'>
            <img src={HeroImg} alt='Alexa Hayes' />
          </div>
          <div className='hero__info'>
            <Ptext>This is my text</Ptext>
            <Button btnLink='/projects' btnTxt='see my works' />
          </div>
          <div className='hero__social'>
            <div className='hero__social__indicator'>
              <p>Follow</p>
              <img src={SocialMediaArrow} alt='social media down arrow' />
            </div>
            <div className='hero__social__text'>
              <ul>
                <li>
                  <a
                    href='https://github.com/jextaposition'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/alexa-j-hayes'
                    target='_blank'
                    rel='noreferrer'
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='hero__scrollDown'>
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt='scroll down arrow' />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export default HeroSection;
