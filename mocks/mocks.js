import { SIGN_IN, SIGN_UP } from '../apollo/client/mutations';

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
