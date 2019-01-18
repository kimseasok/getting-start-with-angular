import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1 class="display-4">{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}
