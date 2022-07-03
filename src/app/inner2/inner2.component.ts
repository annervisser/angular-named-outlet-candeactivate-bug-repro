import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner2',
  template: `
    <p>
      inner2 works!
    </p>
  `,
  styles: [
  ]
})
export class Inner2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
