"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer $isScrolled={isScrolled}>
      <NavContent>
        {/* Logo */}
        <Logo href="/">Húnaia</Logo>

        {/* Desktop Menu */}
        <NavLinks>
          <NavItem href="/explore">Explore</NavItem>
          <NavItem href="/destinations">Destinations</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </NavLinks>

        {/* Mobile Menu Button */}
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </MenuButton>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu>
            <MobileNavItem href="/explore">Explore</MobileNavItem>
            <MobileNavItem href="/destinations">Destinations</MobileNavItem>
            <MobileNavItem href="/blog">Blog</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/contact">Contact</MobileNavItem>
          </MobileMenu>
        )}
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ $isScrolled }) => ($isScrolled ? "#fff" : "transparent")};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? "0 4px 6px rgba(0,0,0,0.1)" : "none")};
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: "#000";
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #000;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: "#ff5a5f";
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
`;

const MobileNavItem = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: "#ff5a5f";
  }
`;
