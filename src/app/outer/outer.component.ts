import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer',
  template: `
    <div class="inner-wrapper">
      <router-outlet name="inner"></router-outlet>
    </div>
    <a [routerLink]="['', { outlets: { inner: ['one'] } }]"><button>ONE</button></a>
    <a [routerLink]="['', { outlets: { inner: ['two'] } }]"><button>TWO</button></a>
  `,
  styles: [
  ]
})
export class OuterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
