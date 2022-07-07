# AngularNamedOutletCandeactivateBugRepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

This is a reproduction for this issue:

## Setup
- Named outlet inside of the normal router-outlet
- Routing of the named outlets is controlled by the main route (named outlet routes always have path '')
- CanDeactivate is added to the named outlet routes

Relevant code: 
- canDeactivate in routing: https://github.com/annervisser/angular-named-outlet-candeactivate-bug-repro/blob/trunk/src/app/app-routing.module.ts#L20
- The guard: https://github.com/annervisser/angular-named-outlet-candeactivate-bug-repro/blob/trunk/src/app/can-deactivate-guard.service.ts

## Expected behaviour
- When canDeactivate is triggered, the component specified for the route is passed.

## Actual behaviour
- canDeactibate is triggered with `component: null`
