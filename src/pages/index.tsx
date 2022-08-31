import { Blog } from '../components/Blog';
import { HalfCard } from '../components/HalfCard';
import { RepositoriesCards } from '../components/RepositoriesCards';
import { Title } from '../components/Title';

export default function Home() {
  return (
    <>
      <Title />

      <HalfCard
        title={{
          content: 'saiba mais sobre mim',
          position: 'right',
        }}
        link={{
          title: 'about',
          href: '/about',
        }}
        imagePath="/static/image/felipe_duque_duquedotdev.jpg"
      />

      <HalfCard
        title={{
          content: 'minha formação profissional',
          position: 'left',
        }}
        link={{
          title: 'tech',
          href: '/tech',
        }}
        imagePath="/static/image/felipeduque_piloto.jpg"
      />

      <HalfCard
        title={{
          content: 'desafios ativos',
          position: 'right',
        }}
        link={{
          title: 'github',
          href: 'https://github.com/duquedotdev',
        }}
        imagePath="/static/image/fmc_felipe_duque.jpg"
      />
      {/* <RepositoriesCards
        imagePaths={[
          '/static/image/cachorro.jpg',
          '/static/image/cachorro.jpg',
          '/static/image/cachorro.jpg',
        ]}
      /> */}
      <Blog />
    </>
  );
}
