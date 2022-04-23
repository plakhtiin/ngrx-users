import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { RouterTestingModule } from '@angular/router/testing';

import { UserListComponent } from './user-list.component';

import { InitialStateMock } from '../../../testing/mocks/initial-state.mock';
import { appReducers } from '../../store/app.reducers';
import { SharedModule } from '../../shared/shared.module';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers),
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [ UserListComponent ],
      providers: [
        provideMockStore({ initialState: InitialStateMock }),
        Actions,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
