import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left,
  .right {
    width: 100%;
    max-width: 500px;
  }
  .right {
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;
const ContactSection = () => {
  return (
    <ContactSectionStyles>
      <div className='container'>
        <SectionTitle heading='Contact' subheading="let's get in touch" />
        <div className='contactSection__wrapper'>
          <div className='left'>
            <ContactInfoItem
              icon={<MdLocalPhone></MdLocalPhone>}
              text='+323.418.1711'
            />
            <ContactInfoItem
              icon={<MdEmail></MdEmail>}
              text='alexa.joy.hayes@gmail.com'
            />
            <ContactInfoItem text='los angeles, california, usa' />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
};

export default ContactSection;
