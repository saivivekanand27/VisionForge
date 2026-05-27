import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GenerateImageForm from "./CreatePost/GenerateImageForm";
import GeneratedImageCard from "./CreatePost/GeneratedImageCard";
import {
  generateImage as generateImageAPI,
  createPost as createPostAPI,
} from "../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  letter-spacing: -0.5px;

  span {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.yellow},
      #f7e98e
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CreatePost = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  // Generate AI Image
  const handleGenerateImage = async () => {
    if (!post.prompt) return;

    setError("");
    setGenerateImageLoading(true);

    try {
      const res = await generateImageAPI({
        prompt: post.prompt,
      });

      // FIXED HERE
      setPost({
        ...post,
        photo: res.data.photo,
      });

    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Failed to generate image. Please try again."
      );
    } finally {
      setGenerateImageLoading(false);
    }
  };

  // Save Post
  const handlePostImage = async () => {
    if (!post.name || !post.prompt || !post.photo) return;

    setError("");
    setCreatePostLoading(true);

    try {
      await createPostAPI(post);
      navigate("/");
    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Failed to create post. Please try again."
      );
    } finally {
      setCreatePostLoading(false);
    }
  };

  return (
    <Container>
      <Heading>
        Create with <span>AI</span>
      </Heading>

      <ContentLayout>
        <LeftColumn>
          <GenerateImageForm
            post={post}
            handleChange={handleChange}
            handleGenerateImage={handleGenerateImage}
            handlePostImage={handlePostImage}
            generateImageLoading={generateImageLoading}
            createPostLoading={createPostLoading}
            error={error}
          />
        </LeftColumn>

        <RightColumn>
          <GeneratedImageCard
            post={post}
            loading={generateImageLoading}
          />
        </RightColumn>
      </ContentLayout>
    </Container>
  );
};

export default CreatePost;