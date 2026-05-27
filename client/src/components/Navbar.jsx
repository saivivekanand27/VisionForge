import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AddRounded, ExploreRounded } from "@mui/icons-material";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  background: ${({ theme }) => theme.navbar};
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: pointer;
  background: linear-gradient(135deg, ${({ theme }) => theme.yellow}, #f7e98e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.black};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(232, 212, 77, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 13px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate("/")}>GenAI</Logo>
      {path === "/post" ? (
        <NavButton onClick={() => navigate("/")}>
          <ExploreRounded />
          Explore Posts
        </NavButton>
      ) : (
        <NavButton onClick={() => navigate("/post")}>
          <AddRounded />
          Create New Post
        </NavButton>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
