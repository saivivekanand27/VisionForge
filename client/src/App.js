import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import theme from "./utils/theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text.primary};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 70px 16px 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post" element={<CreatePost />} />
            </Routes>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
