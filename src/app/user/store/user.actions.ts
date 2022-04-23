import { createAction, props } from '@ngrx/store';

import { IUser } from '../../models/user';

export enum UserActionTypes {
  REQUEST_ALL_USERS = '[User/API] Request All Users',
  REQUEST_ALL_USERS_SUCCESS = '[User/API] Request All Users - Success',
  REQUEST_ALL_USERS_FAILED = '[User/API] Request All Users - Failed',
  REQUEST_ALL_USERS_CANCEL = '[User/API] Request All Users - Cancel',

  REQUEST_USER = '[User/API] Request User by ID',
  REQUEST_USER_SUCCESS = '[User/API] Request User - Success',
  REQUEST_USER_FAILED = '[User/API] Request User - Failed',
  REQUEST_USER_CANCEL = '[User/API] Request User - CANCEL',
}

export const getUsers = createAction(UserActionTypes.REQUEST_ALL_USERS);

export const getUsersSuccess = createAction(UserActionTypes.REQUEST_ALL_USERS_SUCCESS, props<{ users: IUser[] }>(),);

export const getUsersFailed = createAction(UserActionTypes.REQUEST_ALL_USERS_FAILED, props<{ error: string }>(),);

export const getUsersCancel = createAction(UserActionTypes.REQUEST_ALL_USERS_CANCEL);

export const getUserById = createAction(UserActionTypes.REQUEST_USER);

export const getUserByIdSuccess = createAction(UserActionTypes.REQUEST_USER_SUCCESS, props<{ user: IUser }>(),);

export const getUserByIdFailed = createAction(UserActionTypes.REQUEST_USER_FAILED, props<{ error: string }>(),);

export const getUserByIdCancel = createAction(UserActionTypes.REQUEST_USER_CANCEL);
