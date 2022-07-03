import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { Inner1Component } from "./inner1/inner1.component";
import { Inner2Component } from "./inner2/inner2.component";
import { OuterComponent } from "./outer/outer.component";

const routes: Routes = [
  {
    path: '',
    component: OuterComponent,
    // canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: 'one',
        outlet: 'inner',
        component: Inner1Component,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'two',
        outlet: 'inner',
        component: Inner2Component,
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
