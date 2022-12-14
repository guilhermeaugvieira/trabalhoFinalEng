// __tests__/index.test.jsx

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockCart } from '../mocks/mocks';
import Profile from '../pages/cart';

const buildComponenet = () => {
  render(
    <MockedProvider mocks={[mockCart]}>
      <Profile />
    </MockedProvider>
  );
};

describe('Cart', () => {
  it('should render cart correctly', async () => {
    buildComponenet();
    await waitFor(() => expect(screen.getByText('Cart')).toBeInTheDocument());
  });
});
