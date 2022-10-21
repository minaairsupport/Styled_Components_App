import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='logo'></img>
        <Flex>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>About US</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact US</li>
            </ul>
          </div>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
