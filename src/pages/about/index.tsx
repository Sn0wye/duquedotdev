import { HalfCard } from '../../components/HalfCard';
import { Nutshell } from '../../components/Nutshell';
import { RepositoriesCards } from '../../components/RepositoriesCards';
import { Title } from '../../components/Title';

export default function About() {
  return (
    <>
      <Title />
      <RepositoriesCards />
      <HalfCard showTitle={false} title="" titleSide="right" />
      <RepositoriesCards />
      <Nutshell />
    </>
  );
}
