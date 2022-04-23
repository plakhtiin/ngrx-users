import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IApplicationState } from './application-state';

import { userReducer } from '../user/store/user.reducer';

export const appReducers: ActionReducerMap<IApplicationState> = {
  user: userReducer,
  router: routerReducer,
};
