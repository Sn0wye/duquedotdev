import Link from 'next/link';
import {
  AssetArea,
  CardContent,
  CardLink,
  CardTitle,
  Container,
  Content,
} from './styles';

interface HalfCardProps {
  showTitle?: boolean;
  title: string;
  titleSide: 'left' | 'right';
  link?: Link;
}

interface Link {
  title: string;
  href: string;
}

export function HalfCard({
  showTitle = true,
  titleSide,
  title,
  link,
}: HalfCardProps) {
  const splittedTitle = title.split(' ');

  return (
    <Container>
      <Content>
        {titleSide === 'right' && <AssetArea />}
        {showTitle && (
          <CardContent>
            <CardTitle>
              {splittedTitle.map((word, index) => (
                <h3 key={index}>{word}</h3>
              ))}
            </CardTitle>

            {link && renderLink(link)}
          </CardContent>
        )}
        {titleSide === 'left' && <AssetArea />}
      </Content>
    </Container>
  );
}

const renderLink = (link: Link) => {
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
