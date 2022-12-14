import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0.5rem;
  max-width: 50rem;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  margin: 0.75rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Input = styled.input`
  background: #f4f4f5;
  border: 1px solid #8f9ba8;
  padding: 1.2rem;
  height: 2rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #8f9ba8;
  padding: 1.2rem;
  min-width: 100%;
  max-width: 100%;
  background: #f4f4f5;

  resize: none;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export const ErrorMessage = styled.p`
  font-style: italic;
  color: #e3242b;
  padding-top: 0.25rem;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  background: #8f9ba8;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.625rem;
  margin-top: 0.3125rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--primary);
  }

  &:focus {
    background: transparent;
    border-color: var(--primary);
    color: var(--primary);
    outline: none;
  }
`;
