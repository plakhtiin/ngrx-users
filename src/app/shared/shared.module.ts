import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolveDirective } from './directives/resolve.directive';

@NgModule({
  declarations: [
    ResolveDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResolveDirective,
  ]
})
export class SharedModule {
}
