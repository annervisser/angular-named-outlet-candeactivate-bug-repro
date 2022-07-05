import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer',
  template: `
    <div class="inner-wrapper">
      <router-outlet name="inner"></router-outlet>
    </div>
    <a routerLink="/one"><button>ONE</button></a>
    <a routerLink="/two"><button>TWO</button></a>
  `,
  styles: [
  ]
})
export class OuterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
