import Link from 'next/link';
import { Anchor, Container, Logo, StyledNavbar } from './styles';

export function Navbar() {
  return (
    <Container>
      <Link href="/">
        <Logo>&lt;duque.dev &#47;&gt;</Logo>
      </Link>

      <StyledNavbar>
        <ul>
          <Link href="/talk">
            <Anchor>talk</Anchor>
          </Link>
          <Link href="/about">
            <Anchor>about</Anchor>
          </Link>
          <Link href="/tech">
            <Anchor>tech</Anchor>
          </Link>
        </ul>
      </StyledNavbar>
    </Container>
  );
}
