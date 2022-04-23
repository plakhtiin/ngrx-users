import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';

import { IUser } from '../../models/user';
import { selectAllUsers, selectError } from '../store/user.selectors';
import { getUsers, getUsersCancel, getUsersFailed, getUsersSuccess } from '../store/user.actions';
import { IResolveBundle } from '../../shared/directives/resolve.directive';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userList$: Observable<IUser[]> = this.store.select(selectAllUsers);

  error$: Observable<string> = this.store.select(selectError);

  resolveBundle: IResolveBundle[] = [{
    dispatchRequest: () => this.store.dispatch(getUsers()),
    dispatchRequestCancel: () => this.store.dispatch(getUsersCancel()),
    requestSuccess$: this.actions$.pipe(ofType(getUsersSuccess)),
    requestFailure$: this.actions$.pipe(ofType(getUsersFailed)),
  }];

  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
  ) {}

  navigateToUser(userId: number): void {
    this.router.navigate(['user', 'detail', userId]);
  }
}
