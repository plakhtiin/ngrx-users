import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Actions } from '@ngrx/effects';

import { UserDetailComponent } from './user-detail.component';

import { appReducers } from '../../store/app.reducers';
import { SharedModule } from '../../shared/shared.module';
import { InitialStateMock } from '../../../testing/mocks/initial-state.mock';


describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers),
        SharedModule,
      ],
      declarations: [ UserDetailComponent ],
      providers: [
        provideMockStore({ initialState: InitialStateMock }),
        Actions,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
