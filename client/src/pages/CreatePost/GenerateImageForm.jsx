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
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  color: red;
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
        placeholder="Describe your image..."
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
          isDisabled={false}
        />

        <Button
          text="Post Image"
          leftIcon={<CreateRounded />}
          onClick={handlePostImage}
          isLoading={createPostLoading}

          // FIXED HERE
          isDisabled={false}

          variant="outlined"
        />

      </ButtonGroup>
    </FormContainer>
  );
};

export default GenerateImageForm;