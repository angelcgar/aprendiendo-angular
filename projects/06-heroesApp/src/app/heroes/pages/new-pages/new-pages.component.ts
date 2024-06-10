import { Component } from '@angular/core';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: ``,
})
export class NewPagesComponent {
  public publishers = [
    { id: 'DC comics', desc: 'DC - Comics' },
    { id: 'Marvel comics', desc: 'Marvel - Comics' },
  ];
}
