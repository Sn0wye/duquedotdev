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
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
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
      ? 'https://snowye.dev/api'
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
        throw new Error('Something went wrong');
      }

      reset();
      toast.success('Thanks for taking the time to write it.');
    } catch (e) {
      console.error(e);
      toast.error('Something went wrong. Try again later.');
    }
  }

  return (
    <Container>
      <Content>
        <Title />
        <h2>Send me an email, like in the good old days.</h2>
        <Paragraph>
          <strong>I love chatting</strong> with software engineers, tech
          founders, students, and creators. <strong>I'm a busy person</strong>,
          so I can't promise that I'll reply to your email right away, but I'll
          try my best to respond in a timely manner.
        </Paragraph>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input placeholder="John Doe" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input placeholder="john@doe.com" {...register('email')} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Your message here :P"
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
