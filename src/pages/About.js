import React from 'react';
import Button from '../components/Button';
import Ptext from '../components/Ptext';
import AboutImg from '../assets/images/about-page-img.jpeg';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      /* height: 600px;
      width: 100%; */
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
const About = () => {
  return (
    <AboutPageStyles>
      <div className='container'>
        <div className='top-section'>
          <div className='left'>
            <p className='about__subheading'>
              Hi, I am <span>Alexa Hayes</span>
            </p>
            <h2 className='about__heading'>A Certified Software Developer</h2>
            <div className='about__info'>
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                ipsa consequatur rerum ipsam ea nobis iusto fuga maiores,
                minima, adipisci dignissimos veniam mollitia, voluptates vel
                corrupti unde dicta aut amet.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis nobis saepe consectetur culpa cumque quibusdam cum,
                repudiandae at veritatis, autem iusto temporibus nulla animi
                adipisci quas incidunt quod fugit odit.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                adipisci eligendi ipsa eos fugiat ipsam quasi quae ut
                accusantium omnis!
              </Ptext>
            </div>
            <Button
              btnTxt='View Resume'
              btnLink='https://docs.google.com/document/d/1tWTXB-8FP6zlusMh1hZJgwZ2kbSnpahkX2F5BeW5gmA/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'
            />
          </div>
          <div className='right'>
            <img src={AboutImg} alt='alexa leaping in the air' />
          </div>
        </div>
        <div className='about__info__items'>
          <div className='about__info__item'>
            <h1 className='about__info__heading'>Education</h1>
            <AboutInfoItem title='Bootcamp' items={['Bethel Tech']} />
            <AboutInfoItem
              title='University'
              items={['University of Southern California']}
            />
          </div>
          <div className='about__info__item'>
            <h1 className='about__info__heading'>Skills</h1>
            <AboutInfoItem title='Frontend' />
            <AboutInfoItem
              title='Backend'
              items={['Node', 'Express', 'SQL', 'NoSQL']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
};

export default About;
