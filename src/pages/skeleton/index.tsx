import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Skeleton from "../../components/Skeleton";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder = () => {
  return (
    <Container>
      <ImageWrapper>
        <Skeleton height={250} rounded color="#e0e0e0" />
      </ImageWrapper>
      <Info>
        <Skeleton count={45} rounded color="#f0f0f0" />
        <div style={{ height: "8px" }} />
        <Skeleton count={25} rounded color="#f0f0f0" />
      </Info>
    </Container>
  );
};

const Item = () => (
  <Container>
    <ImageWrapper>
      <Image src="https://via.placeholder.com/150x100" />
    </ImageWrapper>
    <Info>
      <Title>Title</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Description>
    </Info>
  </Container>
);

const SkeletonPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <Base>
      {isLoading
        ? Array.from({ length: 25 }).map((_, idx) => <Placeholder key={idx} />)
        : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}
    </Base>
  );
};

export default SkeletonPage;
