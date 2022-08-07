import { Blog } from '../components/Blog';
import { HalfCard } from '../components/HalfCard';
import { RepositoriesCards } from '../components/RepositoriesCards';
import { Title } from '../components/Title';

export default function Home() {
  return (
    <div className="home">
      <Title />

      <HalfCard
        titleSide="right"
        title="saiba mais sobre mim"
        link={{
          title: 'about',
          href: '/about',
        }}
      />

      <HalfCard
        titleSide="left"
        title="minha formação profissional"
        link={{
          title: 'tech',
          href: '/tech',
        }}
      />

      <HalfCard
        titleSide="right"
        title="desafios ativos"
        link={{
          title: 'github',
          href: 'https://github.com/duquedotdev',
        }}
      />
      <RepositoriesCards />
      <Blog />
    </div>
  );
}
