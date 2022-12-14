import { SIGN_UP } from '../apollo/client/mutations';

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
