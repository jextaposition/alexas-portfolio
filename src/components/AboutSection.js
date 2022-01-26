import React from 'react';
import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyle>
      <div className='container'>
        <div className='aboutSection__left'>
          <SectionTitle
            subheading='Let me introduce myself'
            heading='About Me'
          />
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui
            quidem ea voluptate eum adipisci minima eos? Neque veniam eaque, sit
            exercitationem aliquid consequatur quasi!
          </Ptext>
          <div className='aboutSection__buttons'>
            <Button btnLink='/projects' btnTxt='Works' />
            <Button btnLink='/about' btnTxt='Read More' />
          </div>
        </div>
        <div className='aboutSection__right'>
          <img src={AboutImg} alt='a tech person drinking coffee' />
        </div>
      </div>
    </AboutSectionStyle>
  );
};

export default AboutSection;
