import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UserRoutingModule } from './user-routing.module';
import * as userReducer from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserService } from './user.service';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserItemComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ UserEffects ]),
    HttpClientModule,
    StoreModule.forFeature(userReducer.userFeatureKey, userReducer.userReducer),
    UserRoutingModule,
    MatListModule,
    MatCardModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
