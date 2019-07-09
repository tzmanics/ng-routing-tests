import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOneComponent } from './page-one/page-one.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: 'page/:id', component: PageDetailComponent },
  { path: 'pages', component: PageListComponent, data: { title: 'Page' }},
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
