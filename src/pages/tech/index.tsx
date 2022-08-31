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
          title: 'as a pilot',
          content:
            'Você pode me perguntar pessoalmente: 1A103TCM6958. Este era o modelo da hélice que eu voava. Sou bastante curioso e estudioso. E isto foi um diferencial na trajetócia como dev.',
          position: 'left',
        }}
        imagePaths={[
          '/static/image/pilotando.jpeg',
          '/static/image/campo_de_marte.jpeg',
        ]}
      />

      <TechCardsRow
        textCard={{}}
        imagePaths={[
          '/static/image/cirrus.jpeg',
          '/static/image/b737.jpeg',
          '/static/image/g650er.jpg',
        ]}
      />
      <TechCardsRow
        textCard={{
          title: 'as a engineer',
          content:
            'Contribuo ativamente para construção de softwares, codando e produzindo de insights para meu time, além de ajudar com isso meu empregador a gerar e proteger a integridade e continuidade do seu ativo mais valioso: seus dados.',
          position: 'right',
        }}
        imagePaths={[
          '/static/image/discurso.jpeg',
          '/static/image/eu_e_lito.jpg',
        ]}
      />

      <HalfCard
        title={{
          content: '',
          visible: false,
        }}
        imagePath="/static/image/lancha.jpg"
      />

      <TechCardsRow
        textCard={{
          title: 'as a darwinist',
          content:
            'Estou em constante evolução. Seja esta pessoal, digital, ou mesmo espiritual. Como um bom dev, eu me atualizo constantemente, e me aperfeiçoando para melhorar a qualidade de vida de todos.',
          position: 'middle',
        }}
        imagePaths={[
          '/static/image/em_brasilia.jpg',
          '/static/image/bike.jpeg',
        ]}
      />
      <Nutshell />
    </>
  );
}
