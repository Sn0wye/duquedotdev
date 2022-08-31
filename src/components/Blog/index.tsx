import Link from 'next/link';
import { Article, Container, Content } from './styles';

export function Blog() {
  return (
    <Container>
      <h1>tech talk</h1>
      <Content>
        <Article>
          <h2>aphelium</h2>
          <p>
            Uma plataforma modular para investidores orientados ao futuro. Tenho
            dedicado muitos esforços nos últimos meses para retomar um projeto
            que nasceu a três anos atrás. E aqui nasceu a Aphelium. Uma
            iniciativa open-source cuja missão é entregar o anonimato, segurança
            e descentralização em tecnologias (os três principios da Web 3.0)
            que permitam aos usuários ter completo controle pelo que é seu, sua
            vida digital.
          </p>
        </Article>
        <Article>
          <h2>Testando Campos de Texto "Like a Pro"​</h2>
          <p>
            Campos de texto são em essência espaços que permitem o ‘input’ de
            informações, e envio para que o backend os trate. Exemplificando
            isto: em um cadastro de novos usuários, você pode precisar do nome
            completo de um usuário, seu endereço ou mesmo seu contato pessoal
            para notificar algo.
          </p>
        </Article>
      </Content>
    </Container>
  );
}
