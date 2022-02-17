/**
 * Navbar Component
 */

// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IeeeLogo from "../../assets/img/ieeeLogo.png";
import ApplyWithDevfolioBtn from "../../assets/img/applyDevfolioBtn.png";

const NavbarComponent = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 800px) {
    position: static;
  }
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: center;
  gap: 2em;
  flex: 1;
  align-items: center;
  transition: all 500ms;
  font-size: 1.25rem;

  @media (max-width: 800px) {
    gap: revert;
    justify-content: space-evenly;
    position: fixed;
    padding: 1em 0;
    bottom: 4rem;
    left: 50%;
    font-size: 1rem;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 100;
  }
`;

const NavbarItem = styled.li``;

const NavbarLink = styled.a`
  text-decoration: none;
  color: #d898ff;
  text-shadow: 0px 0px 24px #b741ff;
  :hover {
    color: #cb7efb;
    text-shadow: 0px 0px 24px #ab24ff;
  }
`;

const LogoImage = styled.a`
  width: clamp(80px, 100%, 160px);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: clamp(60px, 100%, 120px);
  }
`;

const DevfolioImage = styled.a`
  width: clamp(100px, 100%, 240px);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: clamp(80px, 100%, 160px);
  }
`;

function Navbar() {
  const [offset, setOffset] = useState(0);
  const navLinks = [
    { path: "#about", name: "Why HackTrix?" },
    { path: "#tracks", name: "Tracks" },
    { path: "#Sponsors", name: "Sponsors" },
    { path: "#Prizes", name: "Prizes" },
    { path: "#faqs", name: "FAQs" },
  ];

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavbarComponent>
      <LogoImage href="#Home">
        <img src={IeeeLogo} alt="IEEE Logo" />
      </LogoImage>
      <NavbarList
        style={
          {
            // bottom: offset > 100 ? '1.5em' : '100px',
          }
        }
      >
        {navLinks.map(({ path, name }) => (
          <NavbarItem key={name}>
            <NavbarLink href={`${path}`}>{name}</NavbarLink>
          </NavbarItem>
        ))}
      </NavbarList>
      <DevfolioImage href="#">
        <img src={ApplyWithDevfolioBtn} alt="Apply With Devfolio" />
      </DevfolioImage>
    </NavbarComponent>
  );
}

export default Navbar;
