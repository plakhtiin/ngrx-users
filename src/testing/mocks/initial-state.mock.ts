import { userMock } from './user/user.mock';

import { IApplicationState } from '../../app/store/application-state';

export const InitialStateMock: IApplicationState = {
  user: {
    list: [ userMock ],
    userDetails: {
      [userMock.id]: userMock
    },
    isLoading: false,
    error: '',
  },
  router: {
    state: {},
    navigationId: 1,
  },
};
