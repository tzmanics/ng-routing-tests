import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router){
    this.router.config.unshift(
      { path: 'page-three', component: PageThreeComponent },
      { path: 'page-four', component: PageFourComponent },
    );

    this.links.push(
      { text: 'page-three', path: 'page-three' },
      { text: 'page-four', path: 'page-four' }
    );
  }
}
