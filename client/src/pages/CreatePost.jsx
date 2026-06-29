import { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding: 30px 30px 50px;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 8vh;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: "",
  });
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GeneratedImageCard />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
