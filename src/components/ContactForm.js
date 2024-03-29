import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    /* margin-left: 38%; */
    width: 100%;
  }
  button[type='submit']:hover {
    transform: rotate(3deg);
    background-color: var(--deep-dark);
    color: var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    button[type='submit'] {
      width: 100%;
      margin-left: 0;
    }
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <FormStyles>
        <div className='form-group'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='text'
            id='email'
            email='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Your Message</label>
          <textarea
            type='text'
            id='message'
            message='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type='submit'>Send</button>
      </FormStyles>
    </div>
  );
};

export default ContactForm;
