import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcon } from './styles/SocialIcons.styled';

function SocialIcons() {
  return (
    <StyledSocialIcon>
      <li>
        <a href='http://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='http://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='http://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcon>
  );
}

export default SocialIcons;
