import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h1>Named outlet candeactivate bug repro</h1>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-named-outlet-candeactivate-bug-repro';
}
