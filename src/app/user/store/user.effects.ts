import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, takeUntil, mergeMap, withLatestFrom } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';

import {
  getUserById,
  getUserByIdCancel,
  getUserByIdFailed,
  getUserByIdSuccess,
  getUsers,
  getUsersCancel,
  getUsersFailed,
  getUsersSuccess,
  UserActionTypes,
} from './user.actions';
import { selectAllUsers, selectUser } from './user.selectors';

import { IUser } from '../../models/user';
import { IApplicationState } from '../../store/application-state';
import { UserService } from '../user.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store: Store<IApplicationState>,
    private userService: UserService,
  ) {}

  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap(() => this.store.select(selectAllUsers)),
      mergeMap((storeUsers: IUser[]) => {
          if (storeUsers.length) {
            return of(getUsersSuccess({ users: storeUsers }));
          } else {
            return this.userService.getAllUsers().pipe(
              map((users: IUser[]) => getUsersSuccess({ users })),
              catchError((err: HttpErrorResponse) => of(getUsersFailed({ error: err.message }))),
              takeUntil(this.actions$.pipe(ofType(getUsersCancel))),
            );
          }
        }
      ),
    ),
  );

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserById),
      withLatestFrom(this.store.select(selectUser)),
      mergeMap(([ action, currentUser ]: [ TypedAction<UserActionTypes.REQUEST_USER> & { id: number }, IUser ]) => {
          if (currentUser) {
            return of(getUserByIdSuccess({ user: currentUser }));
          } else {
            return this.userService.getUserById(action.id).pipe(
              map((user: IUser) => getUserByIdSuccess({ user })),
              catchError((err: HttpErrorResponse) => of(getUserByIdFailed({ error: err.message }))),
              takeUntil(this.actions$.pipe(ofType(getUserByIdCancel))),
            );
          }
        }
      ),
    ),
  );
}
