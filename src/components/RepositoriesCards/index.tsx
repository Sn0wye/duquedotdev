import Image from 'next/image';
import { Container, Content, ImageContainer, StyledCard } from './styles';

interface Props {
  imagePaths: string[];
}

export function RepositoriesCards({ imagePaths }: Props) {
  return (
    <Container>
      <Content>
        {imagePaths.map((imagePath, index) => (
          <Card key={index} imagePath={imagePath} />
        ))}
      </Content>
    </Container>
  );
}

const Card = ({ imagePath }: { imagePath: string }) => {
  if (!imagePath) {
    return <StyledCard />;
  }

  return (
    <StyledCard>
      <ImageContainer>
        <Image src={imagePath} layout="fill" objectFit="cover" />
      </ImageContainer>
    </StyledCard>
  );
};
