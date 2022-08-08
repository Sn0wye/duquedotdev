import { AssetCard, Container, Content, StyledTextCard } from './styles';

interface TechCardsProps {
  textCard?: TextCard;
}

interface TextCard {
  title?: string;
  content?: string;
  position?: 'left' | 'middle' | 'right';
}

export function TechCardsRow({ textCard }: TechCardsProps) {
  return (
    <Container>
      <Content>
        {textCard?.position === 'left' ? (
          <TextCard {...textCard} />
        ) : (
          <AssetCard />
        )}
        {textCard?.position === 'middle' ? (
          <TextCard {...textCard} />
        ) : (
          <AssetCard />
        )}
        {textCard?.position === 'right' ? (
          <TextCard {...textCard} />
        ) : (
          <AssetCard />
        )}
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
