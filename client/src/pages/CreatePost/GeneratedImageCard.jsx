import React from "react";
import styled, { keyframes } from "styled-components";
import { CircularProgress } from "@mui/material";

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  border-radius: 20px;
  overflow: hidden;
  background: rgba(232, 212, 77, 0.02);
  transition: all 0.3s ease;

  ${({ hasImage }) =>
    hasImage &&
    `
    border-style: solid;
    border-color: transparent;
  `}
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px;
`;

const LoadingText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const GeneratedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
`;

const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px;
  text-align: center;
`;

const PlaceholderIcon = styled.div`
  font-size: 48px;
  opacity: 0.4;
`;

const PlaceholderText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
  opacity: 0.7;
  max-width: 200px;
  line-height: 1.5;
`;

const GeneratedImageCard = ({ post, loading }) => {
  return (
    <CardContainer hasImage={!!post.photo}>
      {loading ? (
        <LoadingContainer>
          <CircularProgress sx={{ color: "#e8d44d" }} size={36} />
          <LoadingText>Generating your image...</LoadingText>
        </LoadingContainer>
      ) : post.photo ? (
        <GeneratedImage src={post.photo} alt={post.prompt || "Generated"} />
      ) : (
        <PlaceholderContainer>
          <PlaceholderIcon>🎨</PlaceholderIcon>
          <PlaceholderText>
            Your generated image will appear here
          </PlaceholderText>
        </PlaceholderContainer>
      )}
    </CardContainer>
  );
};

export default GeneratedImageCard;
