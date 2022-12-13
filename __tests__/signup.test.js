// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from '../pages/user/signup';
import { MockedProvider } from '@apollo/client/testing';

const buildComponenet = () => {
  render(
    <MockedProvider>
      <SignUp />
    </MockedProvider>
  );
};

describe('SignUp', () => {
  it('should render SignUp form correctly', () => {
    buildComponenet();

    expect(screen.getByText('sign up')).toBeInTheDocument();
  });
});
