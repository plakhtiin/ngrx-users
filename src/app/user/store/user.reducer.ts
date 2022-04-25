import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';

import { IUser } from '../../models/user';

export const userFeatureKey = 'user';

export interface UserState {
  list: IUser[];
  userDetails: Record<string, IUser>;
  isLoading: boolean;
  error: string;
}


export const initialState: UserState = {
  list: [],
  userDetails: {},
  isLoading: false,
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUsers, (state, action) => ({
      ...state,
      isLoading: true,
      error: '',
    })
  ),
  on(UserActions.getUserById, (state, action) => ({
      ...state,
      isLoading: true,
      error: '',
    })
  ),

  on(UserActions.getUsersSuccess, (state, action) => {
    return {
      ...state,
      list: action.users,
      isLoading: false,
      error: '',
    };
  }),

  on(UserActions.getUserByIdSuccess, (state, action) => {
    return {
      ...state,
      userDetails: {
        ...state.userDetails,
        [action.user.id]: action.user,
      },
      isLoading: false,
      error: '',
    };
  }),

  on(UserActions.getUsersFailed, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  on(UserActions.getUserByIdFailed, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),
);
