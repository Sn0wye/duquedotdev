import { HalfCard } from '../../components/HalfCard';
import { Nutshell } from '../../components/Nutshell';
import { RepositoriesCards } from '../../components/RepositoriesCards';
import { Title } from '../../components/Title';

export default function About() {
  return (
    <>
      <Title />
      <RepositoriesCards />
      <HalfCard
        title={{
          content: '',
          visible: false,
        }}
        imagePath="/static/image/lago.jpg"
      />
      <RepositoriesCards />
      <Nutshell />
    </>
  );
}
