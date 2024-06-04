import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css',
})
export class BasicsPagesComponent {
  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'FerNanDo HerRerA';

  public customDate = new Date();
}
