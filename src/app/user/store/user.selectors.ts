import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Params } from '@angular/router';

import { userFeatureKey, UserState } from './user.reducer';

import { selectRouteParams } from '../../store/router.selectors';

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.list,
);

export const selectUser = createSelector(
  selectUserState,
  selectRouteParams,
  (state: UserState, params: Params) => {
    return state.userDetails[params?.id];
  },
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => {
    return state.error;
  },
);
