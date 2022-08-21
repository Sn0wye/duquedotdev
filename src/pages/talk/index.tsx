import {
  Button,
  Container,
  Content,
  Error,
  Form,
  FormGroup,
  Input,
  Label,
  Paragraph,
  Textarea,
} from '../../components/Talk/styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Title } from '../../components/Title';

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
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
      await fetch(`${base}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setIsEmailSent(true);
      setShowToast(true);
      reset();
    } catch (e) {
      console.error(e);
      setIsEmailSent(false);
      setShowToast(true);
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
            {errors.name && <Error>{errors.name.message}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input placeholder="john@doe.com" {...register('email')} />
            {errors.email && <Error>{errors.email.message}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Your message here :P"
              rows={4}
              {...register('message')}
            />
            {errors.message && <Error>{errors.message.message}</Error>}
          </FormGroup>
          <FormGroup>
            <Button type="submit">Send</Button>
          </FormGroup>
        </Form>
      </Content>
    </Container>
  );
}
