import { Nutshell } from '../../components/Nutshell';
import { RepositoriesCards } from '../../components/RepositoriesCards';
import { Title } from '../../components/Title';

export default function About() {
  return (
    <div className="home">
      <Title />
      <RepositoriesCards />
      {/* <HalfCard showTitle={false} title="" titleSide="right" /> */}
      <RepositoriesCards />
      <Nutshell />
    </div>
  );
}
