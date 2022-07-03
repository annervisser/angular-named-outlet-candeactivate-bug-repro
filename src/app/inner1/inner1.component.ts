import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner1',
  template: `
    <p>
      inner1 works!
    </p>
  `,
  styles: [
  ]
})
export class Inner1Component implements OnInit {
  public readonly marker: string = 'inner1-marker';

  constructor() { }

  ngOnInit(): void {
  }

}
