// __tests__/index.test.jsx

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../pages/user/login';
import { mockSignInMutation } from '../mocks/mocks';
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
    <MockedProvider mocks={[mockSignInMutation]}>
      <Login />
    </MockedProvider>
  );
};

describe('SignUp', () => {
  it('should render Login form correctly', () => {
    buildComponenet();

    expect(screen.getByText('login')).toBeInTheDocument();
  });

  it('should not login', async () => {
    buildComponenet();
    const inputEmail = screen.getByTestId('input-email');
    const inputPass = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    fireEvent.change(inputEmail, { target: { value: undefined } });
    fireEvent.change(inputPass, { target: { value: undefined } });
    fireEvent.click(buttonLogin);

    await waitFor(() => expect(mockRouter.push).not.toHaveBeenCalled());
  });

  it('should login correctly', async () => {
    buildComponenet();
    const inputEmail = screen.getByTestId('input-email');
    const inputPass = screen.getByTestId('input-password');
    const buttonLogin = screen.getByTestId('button-login');

    fireEvent.change(inputEmail, { target: { value: 'admin@admin.com' } });
    fireEvent.change(inputPass, { target: { value: '123456' } });
    fireEvent.click(buttonLogin);

    await waitFor(() => expect(mockRouter.push).toHaveBeenCalled());
  });
});
