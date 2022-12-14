// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductItem from '../components/productItem';
import { mockCart, mockWishlist } from '../mocks/mocks';
import { MockedProvider } from '@apollo/client/testing';

const buildComponenet = () => {
  render(
    <MockedProvider mocks={[mockCart, mockWishlist]}>
      <ProductItem
        id={'1023'}
        name={'teste'}
        rating={2}
        img_url={'teste'}
        price={'2.1'}
      />
    </MockedProvider>
  );
};

describe('ProductItem', () => {
  it('should render ProductItem correctly', () => {
    buildComponenet();

    expect(screen.getByText('teste')).toBeInTheDocument();
  });
});
