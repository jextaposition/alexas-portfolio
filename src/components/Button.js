import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.primary ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.primary ? 'var(--gray-1' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

const Button = ({ btnLink = 'test', btnTxt = 'Test', primary = false }) => {
  return (
    <ButtonStyle primary={primary} className='button-wrapper'>
      <Link to={btnLink} className='button'>
        {btnTxt}
      </Link>
    </ButtonStyle>
  );
};

export default Button;
