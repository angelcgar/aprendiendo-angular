import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.component.html',
  styles: ``,
})
export class LayoutPagesComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'icon', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];
}
