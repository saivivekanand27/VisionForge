import React from "react";
import styled from "styled-components";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.red || "#ff5252"};
  padding: 8px 12px;
  background: rgba(255, 82, 82, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(255, 82, 82, 0.15);
`;

const GenerateImageForm = ({
  post,
  handleChange,
  handleGenerateImage,
  handlePostImage,
  generateImageLoading,
  createPostLoading,
  error,
}) => {
  return (
    <FormContainer>
      <FormTitle>Generate an Image with AI</FormTitle>

      <TextInput
        label="Author Name"
        placeholder="Enter your name..."
        name="name"
        value={post.name}
        handleChange={handleChange}
      />

      <TextInput
        label="Image Prompt"
        placeholder="Describe the image you want to generate..."
        name="prompt"
        value={post.prompt}
        handleChange={handleChange}
        rows={5}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ButtonGroup>
        <Button
          text="Generate Image"
          leftIcon={<AutoAwesome />}
          onClick={handleGenerateImage}
          isLoading={generateImageLoading}
          isDisabled={!post.prompt}
        />

        <Button
          text="Post Image"
          leftIcon={<CreateRounded />}
          onClick={handlePostImage}
          isLoading={createPostLoading}
          isDisabled={!post.name || !post.prompt || !post.photo}
          variant="outlined"
        />
      </ButtonGroup>
    </FormContainer>
  );
};

export default GenerateImageForm;
