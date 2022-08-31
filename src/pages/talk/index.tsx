import {
  Button,
  Container,
  Content,
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  Label,
  Paragraph,
  Textarea,
} from '../../components/Talk/styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Title } from '../../components/Title';

import toast, { Toaster } from 'react-hot-toast';

const emailSchema = z.object({
  name: z.string({ required_error: 'Nome e obrigatório' }),
  email: z
    .string({ required_error: 'E-mail é obrigatório' })
    .email({ message: 'E-mail inválido' }),
  message: z.string({ required_error: 'Mensagem é obrigatória' }),
});

interface IEmailInputs {
  name: string;
  email: string;
  message: string;
}

export default function Talk() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEmailInputs>({
    resolver: zodResolver(emailSchema),
  });

  async function onSubmit(data: IEmailInputs) {
    const isProduction = process.env.NODE_ENV === 'production';
    const base = isProduction
      ? 'https://duque.dev/api'
      : 'http://localhost:3000/api';

    try {
      const response = await fetch(`${base}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status !== 200) {
        throw new Error('Algo deu errado');
      }

      reset();
      toast.success('E-mail enviado - Obrigado por escrever.');
    } catch (e) {
      console.error(e);
      toast.error('Algo deu errado. Tente novamente mais tarde.');
    }
  }

  return (
    <Container>
      <Content>
        <Title />
        <h2>Me envie um email. Como nos velhos tempos.</h2>
        <Paragraph>
          <strong>Amo conversar</strong> com engenheiros de software, fundadores
          de tecnologia, estudantes, e criadores de boa tecnologia.{' '}
          <strong>É um tech recruiter?</strong> Se você acredita que faça
          sentido conversarmos, por favor, em sua mensagem inclia a hashtag
          #maionese. Assim posso filtrar as mensagens que não sejam automáticas,
          ou vagas com a qual não faça sentido.
        </Paragraph>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input placeholder="João Silva" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input placeholder="joao@silva.com" {...register('email')} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Sua mensagem aqui :P"
              rows={4}
              {...register('message')}
            />
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <Button type="submit">Send</Button>
          </FormGroup>
        </Form>
      </Content>
      <Toaster position="bottom-right" toastOptions={{}} />
    </Container>
  );
}
