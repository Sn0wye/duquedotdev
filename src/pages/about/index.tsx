import { HalfCard } from '../../components/HalfCard';
import { Nutshell } from '../../components/Nutshell';
import { RepositoriesCards } from '../../components/RepositoriesCards';
import { Title } from '../../components/Title';

export default function About() {
  return (
    <>
      <Title />
      <RepositoriesCards
        imagePaths={[
          '/static/image/cachorro.jpg',
          '/static/image/cachorro.jpg',
          '/static/image/cachorro.jpg',
        ]}
      />
      <HalfCard
        title={{
          content: '',
          visible: false,
        }}
        imagePath="/static/image/lago.jpg"
      />
      <RepositoriesCards
        imagePaths={[
          '/static/image/cachorro.jpg',
          '/static/image/cachorro.jpg',
          '/static/image/cachorro.jpg',
        ]}
      />
      <Nutshell />
    </>
  );
}
