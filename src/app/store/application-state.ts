import { RouterReducerState } from '@ngrx/router-store';

import { UserState } from '../user/store/user.reducer';

export interface IApplicationState {
  user: UserState;
  router: RouterReducerState<any>;
}
