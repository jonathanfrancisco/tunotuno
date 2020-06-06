import React from 'react';
import * as S from './styled';

const NavBar = (props) => {
  return (
    <S.NavBar>
      <S.Title>TunoTuno</S.Title>
      <S.Nav>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a className="login-btn" href="/login">
              Login
            </a>
          </li>
        </ul>
      </S.Nav>
    </S.NavBar>
  );
};

export default NavBar;
