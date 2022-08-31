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
          '/static/image/felipe_duque_novinho2.jpeg',
          '/static/image/felipe_duque_novinho1.jpeg',
          '/static/image/felipe_duque_novinho.jpeg',
        ]}
      />
      <HalfCard
        title={{
          content: '',
          visible: false,
        }}
        imagePath="/static/image/felipe_duque_arara.jpg"
      />
      <RepositoriesCards
        imagePaths={[
          '/static/image/campo_de_marte.jpeg',
          '/static/image/floripa.jpeg',
          '/static/image/google.jpeg',
        ]}
      />
      <Nutshell />
    </>
  );
}
