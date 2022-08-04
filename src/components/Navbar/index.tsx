import Link from 'next/link';
import { Anchor, Container, Logo, Navbar } from './styles';

export function Header() {
    return (
        <Container>
            <Link href="/">
                <Logo>&lt;duque.dev &#47;&gt;</Logo>
            </Link>

            <Navbar>
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
            </Navbar>
        </Container>
    );
}
