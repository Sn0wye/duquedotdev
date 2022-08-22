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
        imagePath=""
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
        imagePath=""
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
        imagePath=""
      />
      <RepositoriesCards />
      <Blog />
    </>
  );
}
