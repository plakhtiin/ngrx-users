import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUrl } from './store/router.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  selectedPage$ = this.store.select(selectUrl);

  constructor(
    private store: Store,
  ) {
  }
}
