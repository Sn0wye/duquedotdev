import { HalfCard } from '../../components/HalfCard';
import { Nutshell } from '../../components/Nutshell';
import { TechCardsRow } from '../../components/TechCardsRow';
import { Title } from '../../components/Title';

export default function Tech() {
  return (
    <>
      <Title />
      <TechCardsRow
        textCard={{
          title: 'ai & ml',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          position: 'left',
        }}
      />

      <TechCardsRow />
      <TechCardsRow
        textCard={{
          title: 'aviation',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          position: 'right',
        }}
      />

      <HalfCard showTitle={false} title="" titleSide="right" />

      <TechCardsRow
        textCard={{
          title: 'software qa',
          content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          position: 'middle',
        }}
      />
      <Nutshell />
    </>
  );
}
