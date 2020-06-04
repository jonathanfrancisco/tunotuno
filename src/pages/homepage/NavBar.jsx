import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  color: rgba(0, 0, 0, 0.4);
  padding: 1em 10em;
  box-shadow: 0px 0px 4px -1px black;

  li,
  a {
    color: inherit;
    list-style: none;
    font-size: 16px;
    font-weight: 500px;
    text-decoration: none;
  }
`;

const StyledTitle = styled.h2`
  margin-right: auto;
  color: #e74c3c;
  :hover {
    color: #c0392b;
  }
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
  }
  ul li {
    margin-left: 3em;
  }
  ul li:first-child:hover {
    color: #34495e;
  }
  .login-btn {
    background-color: #e74c3c;
    color: #fff;
    padding: 0.25em 1em 0.35em;
    border-radius: 100px;
  }
  .login-btn:hover {
    background-color: #c0392b;
  }
`;

const NavBar = (props) => {
  return (
    <StyledNavBar>
      <StyledTitle>TunoTuno</StyledTitle>
      <StyledNav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a className="login-btn" href="#">
              Login
            </a>
          </li>
        </ul>
      </StyledNav>
    </StyledNavBar>
  );
};

export default NavBar;
