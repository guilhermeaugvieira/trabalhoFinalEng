import { SIGN_IN, SIGN_UP } from '../apollo/client/mutations';
import { CART, WISHLIST } from '../apollo/client/queries';

export const mockSignUpMutation = {
  request: {
    query: SIGN_UP,
    variables: {
      name: 'teste',
      email: 'teste@teste.com',
      password: 'teste123',
    },
  },
  result: {
    data: {
      signUp: {
        user: { id: 'aaa', name: 'teste', email: 'teste@teste.com' },
      },
    },
  },
};

export const mockSignInMutation = {
  request: {
    query: SIGN_IN,
    variables: { email: 'admin@admin.com', password: '123456' },
  },
  result: {
    data: {
      signIn: {
        user: { id: 'aaa', name: 'teste', email: 'teste@teste.com' },
      },
    },
  },
};

export const mockCart = {
  request: {
    query: CART,
    variables: {
      name: 'teste',
      email: 'teste@teste.com',
      password: 'teste123',
    },
  },
  result: {
    data: {
      signUp: {
        user: { id: 'aaa', name: 'teste', email: 'teste@teste.com' },
      },
    },
  },
};

export const mockWishlist = {
  request: {
    query: WISHLIST,
    variables: { email: 'admin@admin.com', password: '123456' },
  },
  result: {
    data: {
      signIn: {
        user: { id: 'aaa', name: 'teste', email: 'teste@teste.com' },
      },
    },
  },
};
