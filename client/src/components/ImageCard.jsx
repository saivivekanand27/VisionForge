import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import { saveAs } from "file-saver";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.card};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  }

  &:hover > div {
    opacity: 1;
  }
`;

const StyledImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const PromptText = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AuthorName = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
`;

const DownloadButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.black};
    transform: scale(1.1);
  }
`;

const ImageCard = ({ item }) => {
  const handleDownload = (e) => {
    e.stopPropagation();
    saveAs(item.photo, "download.jpg");
  };

  return (
    <Card>
      <StyledImage
        src={item.photo}
        alt={item.prompt}
        effect="blur"
        width="100%"
      />
      <Overlay>
        <PromptText>{item.prompt}</PromptText>
        <BottomRow>
          <AuthorInfo>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                fontSize: 14,
                bgcolor: "#e8d44d",
                color: "#0D0D0D",
              }}
            >
              {item.name?.[0]?.toUpperCase()}
            </Avatar>
            <AuthorName>{item.name}</AuthorName>
          </AuthorInfo>
          <DownloadButton onClick={handleDownload}>
            <DownloadRounded sx={{ fontSize: 18 }} />
          </DownloadButton>
        </BottomRow>
      </Overlay>
    </Card>
  );
};

export default ImageCard;
