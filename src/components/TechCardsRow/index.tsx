import Image from 'next/image';
import {
  Container,
  Content,
  ImageContainer,
  StyledAssetCard,
  StyledTextCard,
} from './styles';

interface Props {
  textCard: TextCard;
  imagePaths: string[];
}

interface TextCard {
  title?: string;
  content?: string;
  position?: 'left' | 'middle' | 'right';
}

/**
 * TechCardsRow component
 * @param textCard - TextCard object with title, content and position
 * @param imagePaths - Array of image paths (max 3)
 */

export function TechCardsRow(props: Props) {
  const {
    textCard: { position, ...textCard },
    imagePaths,
  } = props;

  return (
    <Container>
      <Content>
        {position === 'left' && (
          <>
            <TextCard {...textCard} />
            {imagePaths.map((imagePath, index) => (
              <AssetCard key={index} src={imagePath} />
            ))}
          </>
        )}
        {position === 'middle' && (
          <>
            <AssetCard src={imagePaths[0]} />
            <TextCard {...textCard} />
            <AssetCard src={imagePaths[1]} />
          </>
        )}
        {position === 'right' && (
          <>
            {imagePaths.map((imagePath, index) => (
              <AssetCard key={index} src={imagePath} />
            ))}
            <TextCard {...textCard} />
          </>
        )}
        {!position &&
          imagePaths.map((imagePath, index) => (
            <AssetCard key={index} src={imagePath} />
          ))}
      </Content>
    </Container>
  );
}

const TextCard = ({ title, content }: TextCard) => {
  return (
    <StyledTextCard>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledTextCard>
  );
};

const AssetCard = ({ src }: { src: string }) => {
  if (!src) {
    return <StyledAssetCard />;
  }

  return (
    <StyledAssetCard>
      <ImageContainer>
        <Image layout="fill" objectFit="cover" src={src} />
      </ImageContainer>
    </StyledAssetCard>
  );
};
