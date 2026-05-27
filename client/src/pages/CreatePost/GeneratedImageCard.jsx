import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  border-radius: 20px;
  overflow: hidden;
  background: rgba(232, 212, 77, 0.02);
`;

const GeneratedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  color: ${({ theme }) => theme.text.secondary};
`;

const GeneratedImageCard = ({ post, loading }) => {
  return (
    <CardContainer>
      {loading ? (
        <CircularProgress sx={{ color: "#e8d44d" }} />
      ) : post.photo ? (
        <GeneratedImage
          src={post.photo}
          alt="Generated"
        />
      ) : (
        <Placeholder>
          Generated image will appear here
        </Placeholder>
      )}
    </CardContainer>
  );
};

export default GeneratedImageCard;