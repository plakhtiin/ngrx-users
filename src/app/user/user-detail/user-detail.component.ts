import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';

import {
  getUserById, getUserByIdCancel, getUserByIdFailed,
  getUserByIdSuccess,
} from '../store/user.actions';
import { IUser } from '../../models/user';
import { selectError, selectUser } from '../store/user.selectors';
import { IResolveBundle } from '../../shared/directives/resolve.directive';
import { selectRouteParams } from '../../store/router.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userDetails$: Observable<IUser> = this.store.select(selectUser);

  error$: Observable<string> = this.store.select(selectError);

  resolveBundle: IResolveBundle[] = [{
    dispatchRequest: (args: any[]) => {
      const [id] = args[0];
      this.store.dispatch(getUserById({ id }));
    },
    dispatchRequestCancel: () => this.store.dispatch(getUserByIdCancel()),
    requestSuccess$: this.actions$.pipe(ofType(getUserByIdSuccess)),
    requestFailure$: this.actions$.pipe(ofType(getUserByIdFailed)),
    dependencies: [this.store.select(selectRouteParams).pipe(map((params: Params) => params.id))]
  }];

  constructor(
    private actions$: Actions,
    private store: Store,
  ) {}

}
