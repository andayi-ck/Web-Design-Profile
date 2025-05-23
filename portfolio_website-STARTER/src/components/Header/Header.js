//also removed the instagram icon code from <Div3></Div3>
//            <SocialIcons href="https://instagram.com">
//                <AiFillInstagram size="4rem"></AiFillInstagram>
//            </SocialIcons>

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20'}}>
          <DiCssdeck size="3rem" ></DiCssdeck> <span>Profile</span>
        </a>
      </Link>
    </Div1>
    
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="4rem"></AiFillGithub>
      </SocialIcons>

      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="4rem"></AiFillLinkedin>
      </SocialIcons>


    </Div3>

  </Container>


);

export default Header;


