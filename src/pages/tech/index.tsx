import { RepositoriesCards } from '../../components/RepositoriesCards';
import { TechCardsTextMidle } from '../../components/TechCardsTextBoth';
import { TechCardsTextLeft } from '../../components/TechCardsTextLeft';
import { TechCardsTextRight } from '../../components/TechCardsTextRight';
import { Title } from '../../components/Title';

export default function Tech() {
  return (
    <div className="tech">
      <Title />
      <TechCardsTextLeft />
      <RepositoriesCards />
      <TechCardsTextRight />
      {/* <HalfCard showTitle={false} /> */}
      <TechCardsTextMidle />
      {/* <Nutshell /> */}
    </div>
  );
}
