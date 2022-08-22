import Image from 'next/image';
import Link from 'next/link';
import {
  CardContent,
  CardLink,
  CardTitle,
  Container,
  Content,
  ImageContainer,
  StyledAssetArea,
} from './styles';

type Props = {
  title: Title;
  imagePath: string;
  link?: Link;
};

interface Title {
  content: string;
  visible?: boolean;
  position?: 'left' | 'right';
}

interface Link {
  title: string;
  href: string;
}

export function HalfCard(props: Props) {
  const {
    title: { position, content, visible = true, ...title },
    link,
    imagePath,
  } = props;
  const splittedContent = title && content.split(' ');

  return (
    <Container>
      <Content>
        {position === 'right' && <AssetArea src={imagePath} />}
        {visible && (
          <CardContent>
            <CardTitle>
              {splittedContent.map((word, index) => (
                <h3 key={index}>{word}</h3>
              ))}
            </CardTitle>

            {link && <StyledLink {...link} />}
          </CardContent>
        )}
        {position === 'left' && <AssetArea src={imagePath} />}
        {!position && <AssetArea src={imagePath} />}
      </Content>
    </Container>
  );
}

const StyledLink = (link: Link) => {
  return link.href.startsWith('http') ? (
    <CardLink href={link.href} target="_blank" rel="noreferrer">
      {link.title}
    </CardLink>
  ) : (
    <Link href={link.href} rel="noreferrer">
      <CardLink>{link.title}</CardLink>
    </Link>
  );
};

const AssetArea = ({ src }: { src: string }) => {
  if (!src) {
    return <StyledAssetArea />;
  }

  return (
    <StyledAssetArea>
      <ImageContainer>
        <Image layout="fill" objectFit="cover" src={src} />
      </ImageContainer>
    </StyledAssetArea>
  );
};
