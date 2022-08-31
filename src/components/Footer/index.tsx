import { Container, Content, FindMe, SocialLink, Socials } from './style';

export function Footer() {
  return (
    <Container>
      <Content>
        <FindMe>
          <h1>find me</h1>
          <h3>digitally</h3>
          <span>&copy; 2022 Felipe Duque</span>
          {/* <span>
            Made with 💜 by <a href="https://snowye.dev">Snowye</a>
          </span> */}
        </FindMe>
        <Socials>
          <SocialLink
            href="https://twitter.com/duquedotdev"
            rel="noreferrer"
            target="_blank"
          >
            twitter
          </SocialLink>
          <SocialLink
            href="https://www.youtube.com/channel/UCXkUPjkhIWV191kNx149Acg"
            rel="noreferrer"
            target="_blank"
          >
            youtube
          </SocialLink>
          <SocialLink
            href="https://instagram.com/duquedotdev"
            rel="noreferrer"
            target="_blank"
          >
            instagram
          </SocialLink>
          <SocialLink
            href="https://t.me/thetiuka"
            rel="noreferrer"
            target="_blank"
          >
            telegram
          </SocialLink>
        </Socials>
      </Content>
    </Container>
  );
}
