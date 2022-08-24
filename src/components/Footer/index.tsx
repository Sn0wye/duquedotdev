import { Container, Content, FindMe, SocialLink, Socials } from './style';

export function Footer() {
  return (
    <Container>
      <Content>
        <FindMe>
          <h1>find me</h1>
          <h3>digitally</h3>
          <span>&copy; 2022 Felipe Duque</span>
          <span>
            Made with 💜 by <a href="https://snowye.dev">Snowye</a>
          </span>
        </FindMe>
        <Socials>
          <SocialLink href="#" rel="noreferrer" target="_blank">
            twitter
          </SocialLink>
          <SocialLink href="#" rel="noreferrer" target="_blank">
            facebook
          </SocialLink>
          <SocialLink href="#" rel="noreferrer" target="_blank">
            instagram
          </SocialLink>
          <SocialLink href="#" rel="noreferrer" target="_blank">
            telegram
          </SocialLink>
        </Socials>
      </Content>
    </Container>
  );
}
