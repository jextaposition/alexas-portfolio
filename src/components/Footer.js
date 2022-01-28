import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding-top: 10rem;
  -webkit-box-shadow: 0px -5px 10px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px -5px 10px rgba(50, 50, 50, 0.75);
  box-shadow: 0px -5px 10px rgba(50, 50, 50, 0.75);
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer__col1'>
          <h1 className='footer__col1__title'>Alexa Hayes</h1>
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            exercitationem eveniet nobis modi quo dolorum.
          </Ptext>
        </div>
        <div className='footer__col2'>
          <FooterCol
            heading='Important Links'
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/project',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className='footer__col3'>
          <FooterCol
            heading='Contact Info'
            links={[
              {
                title: '+1234556788',
                path: 'tel:+1234556788',
              },
              {
                title: 'alexa.joy.hayes@gmail.com',
                path: 'mailto:alexa.joy.hayes@gmail.com',
              },
            ]}
          />
        </div>
        <div className='footer__col4'>
          <FooterCol
            heading='Social Links'
            links={[
              {
                title: 'github',
                path: 'http://github.com',
              },
              {
                title: 'linkedIn',
                path: 'http://linkedin.com',
              },
            ]}
          />
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <Ptext>
            © 2022 - Ayan Khan | Designed By{' '}
            <a target='_blank' rel='noreferrer' href='http://webcifar.com'>
              web cifar
            </a>{' '}
          </Ptext>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
