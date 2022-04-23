import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationActionTiming, routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';

const MATERIAL_MODULES = [
  MatButtonToggleModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [
    ...MATERIAL_MODULES,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      navigationActionTiming: NavigationActionTiming.PostActivation,
      routerState: RouterState.Full,
    }),
    StoreModule.forRoot({ router: routerReducer}),
    EffectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
