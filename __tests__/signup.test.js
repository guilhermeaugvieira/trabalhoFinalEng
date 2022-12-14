// __tests__/index.test.jsx

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from '../pages/user/signup';
import { mockSignUpMutation } from '../mocks/mocks';
import { MockedProvider } from '@apollo/client/testing';

const mockRouter = {
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => null),
};

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));

const buildComponenet = () => {
  render(
    <MockedProvider mocks={[mockSignUpMutation]}>
      <SignUp />
    </MockedProvider>
  );
};

describe('SignUp', () => {
  it('should render SignUp form correctly', () => {
    buildComponenet();

    expect(screen.getByText('sign up')).toBeInTheDocument();
  });

  it('should not submit form data', async () => {
    buildComponenet();
    const inputName = screen.getByTestId('input-name');
    const inputEmail = screen.getByTestId('input-email');
    const inputPass = screen.getByTestId('input-password');
    const inputConfirmPass = screen.getByTestId('input-confirm_password');
    const formButton = screen.getByTestId('button-signup');
    fireEvent.change(inputName, { target: { value: undefined } });
    fireEvent.change(inputEmail, { target: { value: undefined } });
    fireEvent.change(inputPass, { target: { value: undefined } });
    fireEvent.change(inputConfirmPass, { target: { value: undefined } });
    fireEvent.click(formButton);
    await waitFor(() => expect(mockRouter.push).not.toHaveBeenCalled());
  });

  it('should submit form data', async () => {
    buildComponenet();
    const inputName = screen.getByTestId('input-name');
    const inputEmail = screen.getByTestId('input-email');
    const inputPass = screen.getByTestId('input-password');
    const inputConfirmPass = screen.getByTestId('input-confirm_password');
    const formButton = screen.getByTestId('button-signup');
    fireEvent.change(inputName, { target: { value: 'teste' } });
    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputPass, { target: { value: 'teste123' } });
    fireEvent.change(inputConfirmPass, { target: { value: 'teste123' } });
    fireEvent.click(formButton);
    await waitFor(() => expect(mockRouter.push).toHaveBeenCalled());
  });

  it('should fail pass verification', async () => {
    buildComponenet();
    const inputName = screen.getByTestId('input-name');
    const inputEmail = screen.getByTestId('input-email');
    const inputPass = screen.getByTestId('input-password');
    const inputConfirmPass = screen.getByTestId('input-confirm_password');
    const formButton = screen.getByTestId('button-signup');
    fireEvent.change(inputName, { target: { value: 'teste' } });
    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
    fireEvent.change(inputPass, { target: { value: 'teste123' } });
    fireEvent.change(inputConfirmPass, { target: { value: 'fasdfasdf' } });
    fireEvent.click(formButton);
    await waitFor(() =>
      expect(screen.getByText('The passwords do not match')).toBeInTheDocument()
    );
  });
});
